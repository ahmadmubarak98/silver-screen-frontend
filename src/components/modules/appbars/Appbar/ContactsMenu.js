import React from "react";
import clsx from "clsx";

// components
import { Apartment, ContactsRounded, Group, Person } from "@material-ui/icons";
import ToolbarMenu from "components/modules/toolbars/Employee/ToolbarMenu";

import { CONTACTS_ORGS, CONTACTS_EMPLOYEES, CONTACTS_PEOPLE } from "~Routes";

const ContactsMenu = () => {
  const items = [
    {
      label: "Employees",
      path: CONTACTS_EMPLOYEES,
      icon: <Person className="mrXs" />,
    },
    {
      label: "People",
      path: CONTACTS_PEOPLE,
      icon: <Group className="mrXs" />,
    },
    {
      label: "Organizations",
      path: CONTACTS_ORGS,
      icon: <Apartment className="mrXs" />,
    },
  ];

  return (
    <ToolbarMenu
      items={items}
      label="Contacts"
      className={clsx("AppBarMenuButton", "active")}
      icon={<ContactsRounded className="icon" />}
    />
  );
};

export default ContactsMenu;
