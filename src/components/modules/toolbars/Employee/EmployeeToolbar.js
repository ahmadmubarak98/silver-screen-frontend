import React from "react";
import cx from "clsx";

import { useSelector } from "react-redux";

// components
import { Button, Grow, IconButton, Typography } from "@material-ui/core";
import {
  FilterListRounded,
  MoreVert,
  PersonAddRounded as PersonAddIcon,
} from "@material-ui/icons";
import { EmployeeSearchbar } from "~Modules";
import ToolbarMenu from "./ToolbarMenu";
import AlphaSorter from "./AlphaSorter";
import TableViewToggler from "./TableViewToggler";

import "./styles.css";
import SelectedEmployeeActions from "./SelectedEmployeeActions";
import LocationSortMenu from "./LocationSortMenu";
import TableSortMenu from "./TableSortMenu";

const EmployeeToolbar = (props) => {
  const { className } = props;

  const [
    numberOfEmployees,
    numberOfSelectedEmployees,
  ] = useSelector(({ employee }) => [
    employee.list.length,
    employee.selected.length,
  ]);

  const classes = cx("EmployeeToolbar", className);

  return (
    <div className={classes}>
      <div className="upper-bar">
        <IconButton className={cx("Button", "IconButton", "BlackButton")}>
          <MoreVert />
        </IconButton>
        <ToolbarMenu label="Abdul Aziz" icon={<FilterListRounded />} />
        <LocationSortMenu />
        <TableSortMenu />
        <AlphaSorter />
        <EmployeeSearchbar className="mlAuto" />
      </div>
      <div className="lower-bar">
        <SelectedEmployeeActions />
        <Typography color="textPrimary" className="EmployeeCount">
          Total contacts: {numberOfEmployees}
        </Typography>
        <Grow unmountOnExit in={numberOfSelectedEmployees > 0}>
          <Typography color="error" className="EmployeeCount">
            ({numberOfSelectedEmployees} selected)
          </Typography>
        </Grow>
        <TableViewToggler />
        <Button
          className={cx("Button", "BlueButton")}
          disableElevation
          size="small"
          startIcon={<PersonAddIcon />}
          variant="contained"
        >
          Add new employee
        </Button>
      </div>
    </div>
  );
};

export default EmployeeToolbar;
