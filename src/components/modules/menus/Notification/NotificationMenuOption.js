import React from "react";
import clsx from "clsx";

// components
import { Badge, IconButton } from "@material-ui/core";

const NotificationMenuOption = (props) => {
  const { icon, className } = props;

  const classes = clsx("NotificationMenuOption", className);
  return (
    <Badge
      badgeContent={4}
      classes={{ anchorOriginTopRightRectangle: "NotificationMenuOptionBadge" }}
      className="NotificationMenuOptionBadgeWrapper"
    >
      <IconButton className={classes}>{icon}</IconButton>
    </Badge>
  );
};

export default NotificationMenuOption;
