import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

// components
import { Avatar, Typography } from "@material-ui/core";
import ToolbarMenu from "components/modules/toolbars/Employee/ToolbarMenu";

import "./styles.css";

const UserProfileMenu = (props) => {
  const { className } = props;

  const user = useSelector(({ user }) => user);

  const classes = clsx("UserProfileMenu", className);

  return (
    <ToolbarMenu
      className={classes}
      items={[]}
      label={
        <>
          <div className={clsx("UserProfileStatus", user.status)}>
            <Avatar
              alt={user.name}
              src={user.imgUrl}
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
