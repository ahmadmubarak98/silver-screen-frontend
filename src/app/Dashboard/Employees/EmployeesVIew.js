import React from "react";

// components
import { NavBar, SideBar } from "~Atoms";
import { EmployeeTable, EmployeeToolbar } from "~Modules";
import {
  ApartmentRounded as ApartmenIcon,
  PermContactCalendarRounded as ContactsIcon,
  GroupRounded as GroupIcon,
  PersonRounded as PersonIcon,
  LocationCityRounded as LocationCityIcon,
  SupervisorAccountRounded as SupervisorAccountIcon,
} from "@material-ui/icons";

// data
import useFetchEmployees from "./utils/useFetchEmployees";

// routes
import { CONTACTS_EMPLOYEES, CONTACTS_PEOPLE, CONTACTS_ORGS } from "~Routes";

import "./styles.css";

const navbarItems = [
  {
    label: "Employees",
    path: CONTACTS_EMPLOYEES,
    icon: <PersonIcon />,
  },
  {
    label: "People",
    path: CONTACTS_PEOPLE,
    icon: <GroupIcon />,
  },
  {
    label: "Organizations",
    path: CONTACTS_ORGS,
    icon: <ApartmenIcon />,
  },
];

const sidebarItems = [
  {
    label: "All Contacts",
    path: "",
    icon: <ContactsIcon />,
  },
  {
    label: "Administration",
    path: "",
    icon: <LocationCityIcon />,
    items: [
      {
        label: "Administration Department",
        path: "",
        icon: <SupervisorAccountIcon />,
        items: [
          {
            label: "Administration Department",
            path: "",
            icon: <SupervisorAccountIcon />,
          },
          {
            label: "Finance Department",
            path: "",
            icon: <SupervisorAccountIcon />,
          },
          {
            label: "Human Resources Department",
            path: "",
            icon: <SupervisorAccountIcon />,
          },
          {
            label: "Procurement Department",
            path: "",
            icon: <SupervisorAccountIcon />,
          },
          {
            label: "Legal Department",
            path: "",
            icon: <SupervisorAccountIcon />,
          },
        ],
      },
      {
        label: "Finance Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Human Resources Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Procurement Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Legal Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
    ],
  },
  {
    label: "Sales & Marketing",
    path: "",
    icon: <ApartmenIcon />,
    items: [
      {
        label: "Administration Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Finance Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Human Resources Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Procurement Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Legal Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
    ],
  },
  {
    label: "Agency",
    path: "",
    icon: <ApartmenIcon />,
    items: [
      {
        label: "Administration Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Finance Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Human Resources Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Procurement Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Legal Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
    ],
  },
  {
    label: "Production Service",
    path: "",
    icon: <ApartmenIcon />,
    items: [
      {
        label: "Administration Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Finance Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Human Resources Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Procurement Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Legal Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
    ],
  },
  {
    label: "Photography",
    path: "",
    icon: <ApartmenIcon />,
    items: [
      {
        label: "Administration Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Finance Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Human Resources Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Procurement Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Legal Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
    ],
  },
  {
    label: "Post Production",
    path: "",
    icon: <ApartmenIcon />,
    items: [
      {
        label: "Administration Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Finance Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Human Resources Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Procurement Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Legal Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
    ],
  },
  {
    label: "Equipment Rental",
    path: "",
    icon: <ApartmenIcon />,
    items: [
      {
        label: "Administration Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Finance Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Human Resources Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Procurement Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
      {
        label: "Legal Department",
        path: "",
        icon: <SupervisorAccountIcon />,
      },
    ],
  },
];

const EmployeesView = (props) => {
  const { isValidating } = useFetchEmployees();

  return (
    <>
      <NavBar items={navbarItems} />
      <SideBar items={sidebarItems} />
      <div className="EmployeesContainer">
        <EmployeeToolbar loading={isValidating} />
        <EmployeeTable loading={isValidating} />
      </div>
    </>
  );
};

export default EmployeesView;
