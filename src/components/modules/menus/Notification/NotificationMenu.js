import React from "react";
import cx from "clsx";

import "./styles.css";
import NotificationMenuOption from "./NotificationMenuOption";
import {
  CalendarTodayRounded,
  CheckBox,
  EmailRounded,
  ForumRounded,
  NotificationsRounded,
  VideocamRounded,
} from "@material-ui/icons";
import QuickAddButton from "./QuickAddButton";

const NotificationMenu = (props) => {
  const { className, ...rest } = props;

  const classes = cx("NotificationMenu", className);

  return (
    <div className={classes} {...rest}>
      <QuickAddButton />
      <NotificationMenuOption icon={<CheckBox fontSize="small" />} />
      <NotificationMenuOption
        icon={<CalendarTodayRounded fontSize="small" />}
      />
      <NotificationMenuOption icon={<ForumRounded fontSize="small" />} />
      <NotificationMenuOption icon={<VideocamRounded fontSize="small" />} />
      <NotificationMenuOption icon={<EmailRounded fontSize="small" />} />
      <NotificationMenuOption
        icon={<NotificationsRounded fontSize="small" />}
      />
    </div>
  );
};

export default NotificationMenu;
