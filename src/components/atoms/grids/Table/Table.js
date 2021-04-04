import React, { useCallback, useMemo /* , useState */, useState } from "react";
import cx from "clsx";

// components
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AutoSizer from "react-virtualized-auto-sizer";
import { Table as RTable } from "rsuite-table";
import { Checkbox, IconButton } from "@material-ui/core";
import {
  CheckBox,
  CheckBoxOutlineBlank,
  IndeterminateCheckBox,
  MoreVertRounded,
} from "@material-ui/icons";

// atoms
import TableColumn from "./TableColumn";
import TableHeaderCell from "./TableHeaderCell";
import TableCell from "./TableCell";

// utils
import { lang } from "~Utils";
import { useTableColumns } from "./hooks";

// styles
import "./table.css";
import "./styles.css";
import TableSettingsMenu from "./TableSettingsMenu";

const InvisibleColumn = (
  <TableColumn width={2} fixed="right" className="InvisibleColumn">
    <TableHeaderCell />
    <TableCell />
  </TableColumn>
);

const Table = (props) => {
  const {
    className,
    children,
    data,
    columns,
    onUpdateColumns,
    onSortColumns,
    selectionProps,
    settingsProps,
    ...rest
  } = props;

  const [columnSortEnabled, /* setColumnSortEnabled */] = useState(true);
  const computedColumns = useTableColumns(
    columns,
    data,
    columnSortEnabled && onSortColumns
  );

  // ----------------------------------------
  // Event handler
  // ----------------------------------------

  // const handleUpdateColumns = (columns) => {};

  // ----------------------------------------
  // Utils
  // ----------------------------------------

  const getRowClassName = useCallback(
    ({ uuid } = {}) => {
      if (!selectionProps || !selectionProps.selected) return "";
      if (!!selectionProps.selected[uuid]) return "rs-table-row-selected";
    },
    [selectionProps]
  );

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const SelectionColumn = useMemo(() => {
    const canSelect = lang.isObject(selectionProps);
    if (!canSelect) return;

    const {
      onClearSelection,
      onSelectAll,
      onSetSelected,
      rows,
      selected,
      totalRowCount,
    } = selectionProps;

    const rowCount = rows.length;
    const selectedCount = Object.keys(selected).length;

    const handleSelectAll = (event) => {
      // has selection => clear selection
      if (selectedCount > 0) {
        onClearSelection();
      }

      // list is filtered => select only filtered
      else if (rowCount < totalRowCount) {
        onSetSelected(rows.map((row) => row.uuid));
      }

      // no selection => select all
      else onSelectAll();
    };

    const handleSelect = (event, uuid) => {
      if (event.defaultPrevented) return;

      // uuid already selected => deselect
      if (selected[uuid]) {
        const { [uuid]: deselectedRow, ...newSelectedRows } = selected;
        onSetSelected(newSelectedRows);
      }
      // otherwise select
      else
        onSetSelected({
          ...selected,
          [uuid]: true,
        });
    };

    return (
      <TableColumn width={45} align="center" verticalAlign="middle" fixed>
        <TableHeaderCell className="ButtonCell">
          <Checkbox
            onChange={handleSelectAll}
            inputProps={{ "aria-label": "Select all rows" }}
            indeterminate={selectedCount > 0 && selectedCount < totalRowCount}
            checked={rowCount > 0 && selectedCount === totalRowCount}
            icon={
              <CheckBoxOutlineBlank
                style={{ color: "black", fontSize: "0.75em" }}
              />
            }
            checkedIcon={
              <CheckBox style={{ color: "black", fontSize: "0.75em" }} />
            }
            indeterminateIcon={
              <IndeterminateCheckBox style={{ fontSize: "0.75em" }} />
            }
          />
        </TableHeaderCell>
        <TableCell className="ButtonCell">
          {(rowData) => (
            <Checkbox
              checked={!!selected[rowData.uuid]}
              onClick={(event) => handleSelect(event, rowData.uuid)}
              icon={
                <CheckBoxOutlineBlank
                  style={{ color: "black", fontSize: "0.75em" }}
                />
              }
              checkedIcon={
                <CheckBox style={{ color: "black", fontSize: "0.75em" }} />
              }
            />
          )}
        </TableCell>
      </TableColumn>
    );
  }, [selectionProps]);

  const SettingsColumn = useMemo(() => {
    const canEdit = lang.isObject(settingsProps);
    if (!canEdit) return;

    return (
      <TableColumn
        width={50}
        // align="center"
        verticalAlign="middle"
        fixed="right"
      >
        <TableHeaderCell className="ButtonCell">
          <TableSettingsMenu
            columns={computedColumns}
            onUpdateColumns={onUpdateColumns}
            // onSetCanReorder={setCanReorder}
          />
        </TableHeaderCell>
        <TableCell className="ButtonCell">
          <IconButton
            aria-label="more"
            aria-controls="table-row-menu"
            aria-haspopup="true"
            className="Button IconButton"
            // onClick={handleClick}
            edge="end"
          >
            <MoreVertRounded fontSize="small" />
          </IconButton>
        </TableCell>
      </TableColumn>
    );
  }, [settingsProps, computedColumns, onUpdateColumns]);

  const DataColumns = useMemo(() => {
    if (!Array.isArray(computedColumns)) return;

    return computedColumns.map((column) => {
      const { id, headerProps, cellProps, hidden, ...columnProps } = column;

      return (
        <TableColumn key={id} {...columnProps}>
          <TableHeaderCell {...headerProps} />
          <TableCell {...cellProps} />
        </TableColumn>
      );
    });
  }, [computedColumns]);

  const classes = cx("Table", className);
  const virtualized = data.length > 25;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="TableWrapper">
        <div className="TableContent">
          <AutoSizer>
            {({ height, width }) => (
              <RTable
                virtualized={virtualized}
                width={width}
                height={height}
                data={data}
                hover={false}
                rowClassName={getRowClassName}
                // bordered
                className={classes}
                {...rest}
              >
                {SelectionColumn}
                {DataColumns || children}
                {SettingsColumn}
                {InvisibleColumn}
              </RTable>
            )}
          </AutoSizer>
        </div>
      </div>
    </DndProvider>
  );
};

export default Table;
