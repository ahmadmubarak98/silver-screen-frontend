import React from "react";
import clsx from "clsx";

// components
import { IconButton } from "@material-ui/core";
import { AddRounded } from "@material-ui/icons";

const QuickAddButton = (props) => {
  const { className } = props;

  const classes = clsx("QuickAddButton", "NotificationMenuOption", className);
  return (
    <IconButton className={classes}>
      <AddRounded />
    </IconButton>
  );
};

export default QuickAddButton;
