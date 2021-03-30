import React from "react";
import cx from "clsx";

import "./styles.css";

const Tabbar = (props) => {
  const { className, ...rest } = props;

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const classes = cx("Tabbar", className);

  return (
    <div className={classes} {...rest}>
      
    </div>
  );
};

export default Tabbar;
