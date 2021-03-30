import React from "react";
import clsx from "clsx";

// components
import { NavLink } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

const NavBarItem = (props) => {
  const { className, path, icon, label, ...rest } = props;

  const classes = clsx("NavBarItem", className);

  return (
    <Tooltip
      title={label}
      placement="right"
      classes={{ tooltip: "NavBarItemTooltip" }}
    >
      <NavLink
        to={path}
        className={classes}
        activeClassName="ActiveNavBarItem"
        {...rest}
      >
        {icon}
      </NavLink>
    </Tooltip>
  );
};

export default NavBarItem;
