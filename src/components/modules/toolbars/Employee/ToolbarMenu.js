import React, { cloneElement, isValidElement, useState } from "react";
import clsx from "clsx";

import { Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMoreRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolbarMenuButton: {
    background: "#E2E2E2",
    borderRadius: "8px",
    padding: "6px 14px",
    marginRight: "10px",
    textTransform: "initial",


    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const defaultItems = [
  {
    label: "Profile",
  },
  {
    label: "My Account",
  },
  {
    label: "Logout",
  },
];

// TODO Move to atoms/menus

const ToolbarMenu = (props) => {
  const {
    className,
    icon,
    items = defaultItems,
    label,
    keepMounted = false,
    ...rest
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const styles = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (event, item) => {
    if (!item.keepOpen) handleClose();
    if (typeof item.onClick === "function") item.onClick(event, item);
  };

  // ----------------------------------------
  // Render
  // ----------------------------------------

  return (
    <>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={icon}
        endIcon={<ExpandMoreRounded />}
        className={clsx(styles.toolbarMenuButton, className)}
      >
        {label}
      </Button>
      {items.length > 0 && (
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted={keepMounted}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          getContentAnchorEl={null}
          variant="menu"
          classes={{
            paper: "DropdownMenu",
          }}
          PaperProps={{
            elevation: 2,
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          {...rest}
        >
          {items.map((item, index) => {
            if (isValidElement(item))
              return cloneElement(item, {
                key: index,
                // onClick: (event) => handleItemClick(event, item),
              });

            if (typeof item === "string")
              return (
                <div className="ToolbarMenuTitle" key={item}>
                  {item}
                </div>
              );

            return (
              <MenuItem
                className={item.className}
                selected={item.selected}
                onClick={(event) => handleItemClick(event, item)}
                key={index}
              >
                {item.icon}
                {item.label}
              </MenuItem>
            );
          })}
        </Menu>
      )}
    </>
  );
};

export default ToolbarMenu;
