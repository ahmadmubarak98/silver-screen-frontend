import React, { useCallback, useEffect, useRef } from "react";
import cx from "clsx";

// components
import { Cell } from "rsuite-table";

// utils
import { lang } from "~Utils";

// styles
import "./styles.css";

const TableCell = (props) => {
  const { children, className, dataKey, rowData, renderer, ...rest } = props;

  const rendererRef = useRef(renderer);

  useEffect(() => {
    rendererRef.current = renderer;
  }, [renderer]);

  const renderContent = useCallback((rowData) => {
    const renderer = rendererRef.current;
    if (!lang.isFunction(renderer)) return;

    return renderer(rowData);
  }, []);

  const classes = cx("TableCell", className);

  if (dataKey) {
    return (
      <Cell className={classes} rowData={rowData} dataKey={dataKey} {...rest} />
    );
  }

  return (
    <Cell className={classes} rowData={rowData} {...rest}>
      {children || renderContent}
    </Cell>
  );
};

export default TableCell;
