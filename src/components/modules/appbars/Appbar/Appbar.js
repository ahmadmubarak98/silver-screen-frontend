import React, { cloneElement } from "react";
import clsx from "clsx";

// components
import { HomeRounded, LocalMall, PublicRounded } from "@material-ui/icons";
import ContactsMenu from "./ContactsMenu";
import DepartmentsMenu from "./DepartmentsMenu";
import { NotificationMenu, UserProfileMenu } from "~Modules";

import "./styles.css";

const items = [
  {
    label: "Dashboard",
    icon: <HomeRounded className="AppbarIcon" />,
  },
  {
    component: <ContactsMenu />,
  },
  {
    component: <DepartmentsMenu />,
  },
  {
    label: "Projects",
    icon: <LocalMall className="AppbarIcon" />,
  },

  {
    label: "Website",
    icon: <PublicRounded className="AppbarIcon" />,
    menu: true,
  },
];

const Appbar = (props) => {
  const { className, ...rest } = props;

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const renderItem = (item, index) => {
    if (item.component) return cloneElement(item.component, { key: index });

    return (
      <div
        key={item.label}
        className={clsx("AppbarButton", item.active && "active")}
      >
        {item.icon}
        {item.label}
      </div>
    );
  };

  const classes = clsx("Appbar", className);

  return (
    <div className={classes} {...rest}>
      <div className="Logo">LOGO</div>

      <div className={clsx("AppbarWrapper", "mxAuto")}>
        {items.map(renderItem)}
      </div>

      <div className={clsx("AppbarWrapper", "BlackAppbarWrapper")}>
        <NotificationMenu />
        <UserProfileMenu />
      </div>
    </div>
  );
};

export default Appbar;
