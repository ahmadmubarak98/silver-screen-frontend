import React, { useCallback, useState } from "react";

// components
import { Table } from "~Atoms";
import { Avatar } from "@material-ui/core";

// redux
import { useSelector } from "react-redux";
import { employeeActions } from "~Store";

// helpers
import { useSelectionProps, sortTableColumns } from "~Atoms/grids/Table";

import "./styles.css";

const COLUMNS = [
  {
    id: "name",
    header: "Name",
    className: "AvatarTableCell",
    renderer: (data) => (
      <div className="AvatarCell">
        <Avatar variant="rounded" src={data.imageUrl} className="Avatar" />
        <div className="Content">{data.name}</div>
      </div>
    ),
    fixed: true,
    width: 250,
    resizable: true,
  },
  {
    id: "designation",
    header: "Designation",
    renderer: (data) => data.designation,
    resizable: true,
    width: 300,
  },
  {
    id: "email",
    header: "Email",
    renderer: (data) => data.email,
    resizable: true,
    width: 350,
  },
  {
    id: "phone",
    header: "Phone",
    renderer: (data) => data.phone,
    resizable: true,
    width: 200,
  },
  {
    id: "group",
    header: "Group",
    renderer: (data) => data.group,
    resizable: true,
    width: 250,
  },
  {
    id: "address",
    header: "Address",
    renderer: (data) => `${data.country} - ${data.city}`,
    resizable: true,
    width: 300,
  },
];

const EmployeeTable = (props) => {
  const { loading } = props;

  const [columns, setColumns] = useState(COLUMNS);
  const [list, employees, selected] = useSelector(({ employee }) => [
    employee.list,
    employee.employees,
    employee.selected,
  ]);

  const totalRowCount = employees.length;

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  const handleSortColumns = useCallback((sourceId, targetId) => {
    setColumns((prevColumns) =>
      sortTableColumns(prevColumns, sourceId, targetId)
    );
  }, []);

  const handleUpdateColumns = useCallback((updatedColumns) => {
    setColumns((prevColumns) =>
      updatedColumns.reduce((acc, col) => {
        if (!col.selected) return acc;
        const matchingCol = prevColumns.find((c) => c.id === col.id) || {
          id: col.id,
          header: col.content,
          dataKey: col.id.toLowerCase(),
          resizable: true,
          width: 300,
        };
        return [...acc, matchingCol];
      }, [])
    );
  }, []);

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const selectionProps = useSelectionProps(
    list,
    totalRowCount,
    selected,
    employeeActions.setSelected,
    employeeActions.selectAll,
    employeeActions.clearSelection
  );

  return (
    <Table
      loading={loading}
      data={list}
      columns={columns}
      selectionProps={selectionProps}
      settingsProps={{}}
      onUpdateColumns={handleUpdateColumns}
      onSortColumns={handleSortColumns}
    />
  );
};

export default EmployeeTable;
