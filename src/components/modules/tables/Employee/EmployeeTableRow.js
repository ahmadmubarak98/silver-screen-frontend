import React, { PureComponent } from "react";
import cx from "clsx";

// components
import { Avatar, Checkbox, TableCell, TableRow } from "@material-ui/core";
import EmployeeTableRowActions from "./EmployeeTableRowActions";

// redux
import { connect } from "react-redux";
import { employeeActions } from "~Store";

class EmployeeTableRow extends PureComponent {
  handleSelect = (event, id) => {
    if (event.defaultPrevented) return;

    const { selected, onSetSelected } = this.props;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === Object.keys(selected).length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    onSetSelected(newSelected);
  };

  render() {
    const { selected, row, index, style } = this.props;

    const isSelected = selected.indexOf(row.uuid) !== -1;
    const labelId = `employee-table-checkbox-${index}`;
    const isOdd = index % 2 === 1;

    const classes = cx("EmployeeTableRow", isOdd && "StripedEmployeeTableRow");

    return (
      <TableRow
        className={classes}
        component="div"
        role="checkbox"
        aria-checked={isSelected}
        tabIndex={-1}
        key={row.uuid}
        selected={isSelected}
        style={style}
      >
        <TableCell
          className={cx("EmployeeTableCell", "EmployeeTableCellCheckbox")}
          component="div"
          variant="body"
          padding="checkbox"
          style={{ height: style.height }}
        >
          <Checkbox
            checked={isSelected}
            inputProps={{ "aria-labelledby": labelId }}
            onClick={(event) => this.handleSelect(event, row.uuid)}
          />
        </TableCell>

        <TableCell
          className="EmployeeTableCell"
          component="div"
          variant="body"
          id={labelId}
          scope="row"
          style={{ height: style.height }}
        >
          <Avatar
            variant="rounded"
            src={row.imageUrl}
            className="EmployeeTableCellAvatar"
          />
          {row.name}
        </TableCell>

        <TableCell
          className="EmployeeTableCell"
          component="div"
          variant="body"
          style={{ height: style.height }}
        >
          {row.designation}
        </TableCell>

        <TableCell
          className="EmployeeTableCell"
          component="div"
          variant="body"
          style={{ height: style.height }}
        >
          {row.email}
        </TableCell>

        <TableCell
          className="EmployeeTableCell"
          component="div"
          variant="body"
          style={{ height: style.height }}
        >
          {row.phone}
        </TableCell>

        <TableCell
          className="EmployeeTableCell"
          component="div"
          variant="body"
          style={{ height: style.height }}
        >
          {row.country}
          {row.city ? `- ${row.city}` : ""}
        </TableCell>

        <TableCell
          className="EmployeeTableCell"
          component="div"
          variant="body"
          align="right"
          style={{ height: style.height }}
        >
          <EmployeeTableRowActions />
        </TableCell>
      </TableRow>
    );
  }
}

const mappedState = (state, ownProps) => ({
  selected: state.employee.selected,
  row: state.employee.list[ownProps.index],
});

const mappedActions = (dispatch) => ({
  onSetSelected: (selected) => dispatch(employeeActions.setSelected(selected)),
});

export default connect(mappedState, mappedActions)(EmployeeTableRow);
