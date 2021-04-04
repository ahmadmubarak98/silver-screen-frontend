import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import cx from "clsx";

// components
import { HeaderCell } from "rsuite-table";

// utils
import { lang } from "~Utils";

// styles
import "./styles.css";

const style = {
  padding: "10px",
  cursor: "pointer",
};

const ItemTypes = {
  COLUMN: "column",
};

const DraggableTableHeaderCell = ({ children, onDrag, id, ...rest }) => {
  const ref = useRef(null);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.COLUMN,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop(item, monitor) {
      onDrag(item.id, id);
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { id, type: ItemTypes.COLUMN },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const isActive = canDrop && isOver;

  drag(drop(ref));

  const styles = {
    ...style,
    opacity: isDragging ? 0 : 1,
    background: isActive ? "#ddd" : null,
    borderRight: isActive ? "3px solid #aaa" : null,
  };

  return (
    <HeaderCell {...rest} style={{ padding: 0 }}>
      <div ref={ref} style={styles}>
        {children}
      </div>
    </HeaderCell>
  );
};

const TableHeaderCell = (props) => {
  const { className, content, children, onDrag, ...rest } = props;

  const isDraggable = lang.isFunction(onDrag);
  const classes = cx("TableHeaderCell", className);

  if (isDraggable)
    return (
      <DraggableTableHeaderCell {...props} className={classes}>
        {content || children}
      </DraggableTableHeaderCell>
    );

  return (
    <HeaderCell className={classes} {...rest}>
      {content || children}
    </HeaderCell>
  );
};

export default TableHeaderCell;
