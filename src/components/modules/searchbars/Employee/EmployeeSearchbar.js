import React, { useCallback, useMemo, useState } from "react";
import { useEventListener } from "~Hooks";
import cx from "clsx";

// components
import { IconButton, Input /* useMediaQuery */ } from "@material-ui/core";
// import { useTheme } from "@material-ui/core/styles";
import {
  SearchRounded as SearchIcon,
  CloseRounded as CloseIcon,
} from "@material-ui/icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { employeeActions } from "~Store";

import "./styles.css";

const EmployeeSearchbar = (props) => {
  const { className } = props;

  const dispatch = useDispatch();
  const query = useSelector((state) => state.employee.query);
  const hasValue = useMemo(() => query.length > 0, [query]);
  const [hasFocus, setHasFocus] = useState(false);

  // shrink searchbar when viewing on small devices
  // const theme = useTheme();
  // // const shrink = useMediaQuery(theme.breakpoints.down("sm"));
  // // const [isOpen, setIsOpen] = useState(false);

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  const handleSearch = useCallback(
    (event) => dispatch(employeeActions.filter({ query: event.target.value })),
    [dispatch]
  );

  const handleClear = useCallback(
    (event) => dispatch(employeeActions.filter({ query: "" })),
    [dispatch]
  );

  const handleFocus = useCallback(() => {
    setHasFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setHasFocus(false);
  }, []);

  // clear value on escape
  useEventListener(
    "keydown",
    (event) => event.key === "Escape" && handleClear(event),
    hasFocus
  );

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const computedIcon = useMemo(() => {
    if (hasValue) return <CloseIcon fontSize="small" />;
    return <SearchIcon fontSize="small" />;
  }, [hasValue]);

  const classes = cx("EmployeeSearchbar", className);

  // if (shrink && !isOpen)
  //   return (
  //     <IconButton className={className} onClick={() => setIsOpen(true)}>
  //       <SearchIcon fontSize="small" />
  //     </IconButton>
  //   );

  return (
    <Input
      id="employee-searchbar"
      classes={{ input: "EmployeeSearchbarInput" }}
      className={classes}
      autoFocus
      disableUnderline
      onChange={handleSearch}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={query}
      endAdornment={
        <IconButton
          className="EmployeeSearchbarIcon"
          size="small"
          onClick={handleClear}
          disabled={!hasValue}
        >
          {computedIcon}
        </IconButton>
      }
    />
  );
};

export default EmployeeSearchbar;
