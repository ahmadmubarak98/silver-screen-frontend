import React, { cloneElement } from "react";

// components
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@material-ui/core";
import "./styles.css";
import useStyles from "./utils/useStyles";

const SideBarItem = (props) => {
  const { count = 10, item, onOpen } = props;
  const styles = useStyles();

  const handleItemClick = (event) => {
    if (typeof onOpen !== "function") return;
    onOpen(true);
  };

  return (
    <Tooltip
      disableFocusListener
      key={item.label}
      title={item.label}
      classes={{ tooltip: "NavBarItemTooltip" }}
      placement="right"
    >
      <ListItem
        button
        key={item.label}
        className={styles.sideBarItem}
        onClick={handleItemClick}
      >
        <ListItemIcon className={styles.sideBarItemIcon}>
          {cloneElement(item.icon, {
            classes: { root: styles.sideBarItemIconSvg },
          })}
        </ListItemIcon>
        <ListItemText
          classes={{ primary: styles.sideBarItemLabel }}
          primary={item.label}
        />
        {count > 0 && <div className="SideBarItemBadge">{count}</div>}
      </ListItem>
    </Tooltip>
  );
};

export default SideBarItem;
