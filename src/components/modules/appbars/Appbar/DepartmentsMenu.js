import React from "react";
import clsx from "clsx";

// components
import {
  Apartment,
  Group,
  Person,
} from "@material-ui/icons";
import ToolbarMenu from "components/modules/toolbars/Employee/ToolbarMenu";
import { Layers } from "components/atoms/icons";

const DepartmentsMenu = () => {
  const items = [
    "Company",
    {
      label: "Administration",
      icon: <Person className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Human Resources",
      icon: <Group className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Finance",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Procurement",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Legal",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },

    "Sales & Marketing",
    {
      label: "Sales",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Client Servicing",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Marketing",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Customer Support",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },

    "Agency",
    {
      label: "Creative Management",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Writing",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },

    "Production Service",
    {
      label: "Production",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Wardrobe",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Locations",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Talent & Casting",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Art",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Props",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Transportation",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Catering",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },

    "Photography",
    {
      label: "Photography",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },

    "Post Production",
    {
      label: "Editing & Color Grading",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Motion Graphics",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Audio Studio",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
    {
      label: "Studio Operations",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },

    "Equpment Rental",
    {
      label: "Equipment Rental",
      icon: <Apartment className="mrXs" />,
      className: 'DepartmentsMenuOption'
    },
  ];

  return (
    <ToolbarMenu
      items={items}
      label="Company"
      className={clsx("AppBarMenuButton")}
      icon={<Layers />}
    />
  );
};

export default DepartmentsMenu;
