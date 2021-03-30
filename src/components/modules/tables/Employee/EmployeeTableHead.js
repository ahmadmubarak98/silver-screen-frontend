import React, { isValidElement, useCallback } from "react";
import cx from "clsx";

// components
import {
  Checkbox,
  IconButton,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import { SettingsRounded as SettingsIcon } from "@material-ui/icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { employeeActions } from "~Store";

import "./styles.css";

const headCells = [
  {
    id: "name",
    label: "Name",
    // width: "120px",
  },
  {
    id: "designation",
    label: "Designation",
    // width: "120px",
  },
  {
    id: "email",
    label: "Email",
    // width: "120px",
  },
  {
    id: "phone",
    label: "Phone No.",
    // width: "120px",
  },
  {
    id: "address",
    label: "Address",
    // width: "120px",
  },
  {
    id: "settings",
    align: "right",
    // width: "120px",
    label: (
      <IconButton
        aria-label="more"
        aria-controls="employee-table-row-actions"
        aria-haspopup="true"
        style={{ marginRight: 4 }}
      >
        <SettingsIcon />
      </IconButton>
    ),
  },
];

const tableHeadDataSelector = ({ employee }) => [
  employee.employees,
  employee.list,
  employee.selected.length,
  employee.order,
  employee.orderBy,
];

const sharedHeadCellProps = {
  className: "EmployeeTableCell",
  component: "div",
  scope: "col",
  variant: "head",
};

const EmployeeTableHead = (props) => {
  const { height, rowCount } = props;

  const dispatch = useDispatch();
  const [
    allEmployees,
    filteredEmployees,
    numSelected,
    order,
    orderBy,
  ] = useSelector(tableHeadDataSelector);

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  const handleRequestSort = useCallback(
    (event, property) => {
      const isAsc = orderBy === property && order === "asc";
      dispatch(
        employeeActions.sort({
          order: isAsc ? "desc" : "asc",
          orderBy: property,
        })
      );
    },
    [order, orderBy, dispatch]
  );

  const createSortHandler = useCallback(
    (property) => (event) => {
      handleRequestSort(event, property);
    },
    [handleRequestSort]
  );

  const handleSelectAllClick = (event) => {
    // has selection => clear selection
    if (numSelected > 0) {
      dispatch(employeeActions.clearSelection());
    }

    // list is filtered => select only filtered
    else if (filteredEmployees.length < allEmployees.length) {
      dispatch(
        employeeActions.setSelected(
          filteredEmployees.map((employee) => employee.uuid)
        )
      );
    }

    // no selection => select all
    else dispatch(employeeActions.selectAll());
  };

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const renderHeadCell = (headCell) => {
    const { label, id, width, ...headCellProps } = headCell;

    // non-sortable
    if (isValidElement(label)) {
      return (
        <TableCell
          key={id}
          style={{ width, height }}
          {...sharedHeadCellProps}
          {...headCellProps}
        >
          {label}
        </TableCell>
      );
    }

    return (
      <TableCell
        key={id}
        style={{ width, height }}
        sortDirection={orderBy === id ? order : false}
        {...sharedHeadCellProps}
        {...headCellProps}
      >
        <TableSortLabel
          active={orderBy === id}
          direction={orderBy === id ? order : "asc"}
          onClick={createSortHandler(id)}
        >
          {label}
        </TableSortLabel>
      </TableCell>
    );
  };

  return (
    <TableHead component="div">
      <TableRow className="EmployeeTableRow" component="div">
        <TableCell
          padding="checkbox"
          style={{ height }}
          {...sharedHeadCellProps}
          className={cx("EmployeeTableCell", "EmployeeTableCellCheckbox")}
        >
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={handleSelectAllClick}
            inputProps={{ "aria-label": "select all accounts" }}
          />
        </TableCell>
        {headCells.map(renderHeadCell)}
      </TableRow>
    </TableHead>
  );
};

export default EmployeeTableHead;
