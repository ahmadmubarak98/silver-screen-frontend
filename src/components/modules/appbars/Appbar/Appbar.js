import React, { cloneElement } from "react";
import clsx from "clsx";

// components
import { IconButton} from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import { Home } from '~Atoms/icons';
import { NotificationMenu, UserProfileMenu } from "~Modules";
import ContactsMenu from "./ContactsMenu";
import DepartmentsMenu from "./DepartmentsMenu";


import "./styles.css";
import { Globe, Projects } from "components/atoms/icons";

const items = [
  {
    label: "Dashboard",
    icon: <Home className="AppbarIcon"  />,
  },
  {
    component: <ContactsMenu />,
  },
  {
    component: <DepartmentsMenu />,
  },
  {
    label: "Projects",
    icon: <Projects className="AppbarIcon" />,
  },

  {
    label: "Website",
    icon: <Globe className="AppbarIcon" />,
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

      <IconButton className='AppBarSearch'>
        <SearchRounded />
      </IconButton>
      <div className={clsx("AppbarWrapper", "BlackAppbarWrapper")}>
        <NotificationMenu />
        <UserProfileMenu />
      </div>
    </div>
  );
};

export default Appbar;
