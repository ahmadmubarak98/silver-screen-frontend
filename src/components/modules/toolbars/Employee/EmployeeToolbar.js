import React from "react";
import cx from "clsx";

import { useSelector } from "react-redux";

// components
import {
  Button,
  Fade,
  Grow,
  IconButton,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import {
  MoreVert,
  PersonAddRounded as PersonAddIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import { EmployeeSearchbar } from "~Modules";
import ToolbarMenu from "./ToolbarMenu";
import AlphaSorter from "./AlphaSorter";
import TableViewToggler from "./TableViewToggler";

import "./styles.css";
import SelectedEmployeeActions from "./SelectedEmployeeActions";
import LocationSortMenu from "./LocationSortMenu";
import TableSortMenu from "./TableSortMenu";
import { Filter } from "components/atoms/icons";

const EmployeeToolbar = (props) => {
  const { className } = props;

  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down("sm"));

  const [
    numberOfEmployees,
    numberOfSelectedEmployees,
  ] = useSelector(({ employee }) => [
    employee.list.length,
    Object.keys(employee.selected).length,
  ]);

  const classes = cx("EmployeeToolbar", className);

  return (
    <div className={classes}>
      <div className="upper-bar">
        <IconButton className={cx("Button", "IconButton", "BlackButton")}>
          <MoreVert />
        </IconButton>
        <Fade in={!hidden} unmountOnExit>
          <ToolbarMenu label="Abdul Aziz" icon={<Filter />} />
        </Fade>
        <Fade in={!hidden} unmountOnExit>
          <LocationSortMenu />
        </Fade>
        <Fade in={!hidden} unmountOnExit>
          <TableSortMenu />
        </Fade>
        <Fade in={!hidden} unmountOnExit>
          <AlphaSorter />
        </Fade>
        <EmployeeSearchbar className="mlAuto" />
      </div>
      <div className="lower-bar">
        <Fade in={!hidden} unmountOnExit>
          <SelectedEmployeeActions />
        </Fade>
        <Typography color="textPrimary" className="EmployeeCount">
          Total contacts: {numberOfEmployees}
        </Typography>
        <Grow unmountOnExit in={numberOfSelectedEmployees > 0}>
          <Typography className="EmployeeCount">
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
