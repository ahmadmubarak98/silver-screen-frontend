import React from "react";
import cx from "clsx";

// components
import {
  LinearProgress,
  Table,
  TableBody,
  TableContainer,
} from "@material-ui/core";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import EmployeeTableHead from "./EmployeeTableHead";
import EmployeeTableRow from "./EmployeeTableRow";

// redux
import { useSelector } from "react-redux";

const headerHeight = 45;
const rowHeight = 70;

const EmployeeTable = (props) => {
  const { className, loading } = props;

  const [rowCount, originalRowCount] = useSelector(({ employee }) => [
    employee.list.length,
    employee.employees.length,
  ]);

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const classes = cx("EmployeeTableContainer", className);

  return (
    <TableContainer className={classes}>
      <Table
        className="EmployeeTable"
        size="medium"
        component="div"
        aria-labelledby="tableTitle"
        aria-label="accounts table"
      >
        <EmployeeTableHead height={headerHeight} rowCount={originalRowCount} />
        <TableBody className="EmployeeTableBody" component="div">
          {loading && <LinearProgress />}
          <div className="TableBodyContent">
            <AutoSizer>
              {({ height, width }) => (
                <List
                  itemCount={rowCount}
                  itemSize={rowHeight}
                  height={height}
                  width={width}
                  overscanCount={10}
                >
                  {EmployeeTableRow}
                </List>
              )}
            </AutoSizer>
          </div>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
