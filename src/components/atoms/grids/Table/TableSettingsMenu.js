import React, { useCallback, useEffect, useMemo, useState } from "react";

// components
import {
  Button,
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
} from "@material-ui/core";
import {
  CheckBox,
  CheckBoxOutlineBlank,
  SettingsRounded,
} from "@material-ui/icons";

const anchorOrigin = {
  vertical: "bottom",
  horizontal: "center",
};

const transformOrigin = {
  vertical: "top",
  horizontal: "center",
};

const style = {
  padding: 8,
};

const ALL_ROW_PROPERTIES = [
  "Name",
  "Designation",
  "Email",
  "Phone",
  "Group",
  "Address",
  "Label",
  "Organization",
  "Update Time",
];

const useColumnOptions = (columns, isInitiallySelected) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(
      columns.reduce((acc, col) => {
        // if(col.fixed) return acc;
        if (col.headerProps) {
          return [
            ...acc,
            { ...col.headerProps, selected: isInitiallySelected },
          ];
        }
        return [...acc, { ...col, selected: isInitiallySelected }];
      }, [])
    );
  }, [columns, isInitiallySelected]);

  const handleToggleOption = useCallback((optionId, value) => {
    setOptions((prevOptions) =>
      prevOptions.reduce((acc, opt) => {
        if (opt.id !== optionId) return [...acc, opt];
        return [...acc, { ...opt, selected: value }];
      }, [])
    );
  }, []);

  return [options, handleToggleOption];
};

// compute the set difference between allRowProperties and columns
const useHiddenColumns = (allRowProperties, columns) => {
  return useMemo(
    () =>
      allRowProperties.reduce((acc, prop) => {
        // skip if any column matches the given property (means it is visible)
        if (columns.some((col) => col.headerProps.content === prop)) return acc;
        return [...acc, { id: prop, content: prop }];
      }, []),
    [allRowProperties, columns]
  );
};

const TableColumnOption = (props) => {
  const { id, label, onToggle, selected } = props;

  return (
    <ListItem
      key={label}
      role={undefined}
      dense
      button
      onClick={() => onToggle(id, !selected)}
    >
      <ListItemIcon classes={{ root: "TableColumnOptionIcon" }}>
        <Checkbox
          edge="start"
          checked={selected}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": id }}
          icon={<CheckBoxOutlineBlank fontSize="small" />}
          checkedIcon={<CheckBox color="primary" fontSize="small" />}
        />
      </ListItemIcon>
      <ListItemText id={id} primary={label} />
    </ListItem>
  );
};

const TableMenu = (props) => {
  const {
    allRowProperties = ALL_ROW_PROPERTIES,
    columns,
    onUpdateColumns,
    // onSetCanReorder,
  } = props;
  // headerProps > id, content, onDrag

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const hiddenColumns = useHiddenColumns(allRowProperties, columns);
  const [selectedOptions, toggleSelectedOption] = useColumnOptions(
    columns,
    true
  );
  const [deselectedOptions, toggleDeselectedOption] = useColumnOptions(
    hiddenColumns,
    false
  );

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  const handleOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleSave = () => {
    onUpdateColumns([...selectedOptions, ...deselectedOptions]);
  };

  // const handleCancel = () => {};

  // ----------------------------------------
  // Render
  // ----------------------------------------

  return (
    <>
      <IconButton
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleOpen}
        style={style}
        size="small"
      >
        <SettingsRounded />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        variant="menu"
        MenuListProps={{
          className: "TableSettingsMenu",
        }}
        classes={{
          paper: "DropdownMenu",
        }}
      >
        <Typography className="TableSettingsTitle" variant="h6">
          Choose columns
        </Typography>
        <Typography className="TableSettingsListTitle" variant="caption">
          Visible columns
        </Typography>
        <div className="TableSettingsList">
          {selectedOptions.map((option) => (
            <TableColumnOption
              id={option.id}
              key={option.id}
              label={option.content}
              onToggle={toggleSelectedOption}
              selected={option.selected}
            />
          ))}
        </div>

        <Typography className="TableSettingsListTitle" variant="caption">
          Hidden columns
        </Typography>

        <div className="TableSettingsList">
          {deselectedOptions.map((option) => (
            <TableColumnOption
              id={option.id}
              key={option.id}
              label={option.content}
              onToggle={toggleDeselectedOption}
              selected={option.selected}
            />
          ))}
        </div>
        <div className="TableSettingsActions">
          <Button
            className="Button BlueButton mlAuto"
            disableElevation
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </Menu>
    </>
  );
};

export default TableMenu;
