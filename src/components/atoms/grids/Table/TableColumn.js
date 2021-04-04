import React from "react";
import cx from "clsx";

// components
import { Column } from "rsuite-table";

// styles
import "./styles.css";

const TableColumn = (props) => {
  const { className, children, ...rest } = props;

  const classes = cx("TableColumn", className);

  return (
    <Column className={classes} {...rest}>
      {children}
    </Column>
  );
};

export default TableColumn;
