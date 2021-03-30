import React from "react";
import cx from "clsx";

import NavBarItem from "./NavBarItem";

import "./styles.css";

const NavBar = (props) => {
  const { className, items = [], ...rest } = props;

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const classes = cx("NavBar", className);

  return (
    <div className={classes} {...rest}>
      {items.map((item, index) => (
        <NavBarItem key={index} {...item} />
      ))}
    </div>
  );
};

export default NavBar;
