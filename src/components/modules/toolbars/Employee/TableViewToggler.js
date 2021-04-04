import React, { useState } from "react";

// components
import ToolbarMenu from "./ToolbarMenu";
import { TableChartRounded, ViewComfyRounded } from "@material-ui/icons";

const TableViewToggler = (props) => {
  const [view, setView] = useState("Table");

  const tableViewOptions = [
    {
      label: "Table",
      icon: <TableChartRounded className="mrXs" />,
      onClick: () => setView("Table"),
      selected: view === "Table",
    },
    {
      label: "Grid",
      icon: <ViewComfyRounded className="mrXs" />,
      onClick: () => setView("Grid"),
      selected: view === "Grid",
    },
  ];

  const getIcon = () => {
    if (view === "Table") return <TableChartRounded />;
    else if (view === "Grid") return <ViewComfyRounded />;
  };

  return (
    <ToolbarMenu
      icon={getIcon()}
      className="mlAuto"
      label={`${view} view`}
      items={tableViewOptions}
    />
  );
};

export default TableViewToggler;
