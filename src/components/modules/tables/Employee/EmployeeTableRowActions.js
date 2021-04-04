import React, { useCallback } from "react";

import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { MoreVertRounded as MoreVertIcon } from "@material-ui/icons";
import clsx from "clsx";

const options = [];

const ITEM_HEIGHT = 48;

const EmployeeTableRowActions = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleClick = useCallback((event) => {
  //   setAnchorEl(event.currentTarget);
  // }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="employee-table-row-actions"
        aria-haspopup="true"
        className={clsx("Button", "IconButton")}
        edge="end"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="employee-table-row-actions"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
        classes={{
          paper: "DropdownMenu",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default EmployeeTableRowActions;
