import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

// components
import { Avatar, Typography } from "@material-ui/core";
import ToolbarMenu from "components/modules/toolbars/Employee/ToolbarMenu";

import avatar1 from "../../../../assets/img/1.jpg";

import "./styles.css";
import { ExitToApp, Settings } from "@material-ui/icons";

const items = [
  {
    label: "Account Settings",
    icon: <Settings className="mrSm" />,
  },
  {
    label: "Logout",
    icon: <ExitToApp className="mrSm" />,
  },
];

const UserProfileMenu = (props) => {
  const { className } = props;

  const user = useSelector(({ user }) => user);

  const classes = clsx("UserProfileMenu", className);

  return (
    <ToolbarMenu
      className={classes}
      items={items}
      label={
        <>
          <div className={clsx("UserProfileStatus", user.status)}>
            <Avatar
              alt={user.name}
              src={user.imgUrl || avatar1}
              className="UserProfileMenuAvatar"
            />
          </div>
          <Typography>{user.name}</Typography>
        </>
      }
    />
  );
};

export default UserProfileMenu;
