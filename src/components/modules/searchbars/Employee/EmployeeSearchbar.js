import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useEventListener } from "~Hooks";
import cx from "clsx";

// components
import { IconButton, Input, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import {
  SearchRounded as SearchIcon,
  CloseRounded as CloseIcon,
} from "@material-ui/icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { employeeActions } from "~Store";

import "./styles.css";
import { lang } from "~Utils";

const EmployeeSearchbar = (props) => {
  const { className, onOpen, onClose } = props;

  const wrapperRef = useRef();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const query = useSelector((state) => state.employee.query);

  const theme = useTheme();
  const shrink = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(false);

  // state
  const hasValue = useMemo(() => query.length > 0, [query]);
  const [hasFocus, setHasFocus] = useState(false);

  // close searchbar when viewing on small devices
  useEffect(() => {
    if (shrink) setIsOpen(false);
  }, [shrink]);

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  const handleOpen = (event) => {
    event.preventDefault();
    setIsOpen(true);

    if (lang.isFunction(onOpen)) onOpen(event, props);
  };

  const handleClose = (event) => {
    setIsOpen(false);
    if (lang.isFunction(onClose)) onClose(event, props);
  };

  const handleSearch = useCallback(
    (event) => dispatch(employeeActions.filter({ query: event.target.value })),
    [dispatch]
  );

  const handleClear = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(employeeActions.filter({ query: "" }));
      inputRef.current.focus()
    },
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

  // close search bar when clicking away
  useEventListener(
    "click",
    (event) => {
      const wrapper = wrapperRef.current;

      // click happened on input icon -> ignore
      if (event.defaultPrevented) return;

      // click happened inside wrapper -> ignore
      if (wrapper.contains(event.target)) return;

      handleClose();
    },
    isOpen
  );

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const computedIcon = useMemo(() => {
    if (hasValue) return <CloseIcon fontSize="small" />;
    return <SearchIcon fontSize="small" />;
  }, [hasValue]);

  const classes = cx("EmployeeSearchbar", className);

  if (!isOpen)
    return (
      <IconButton className='Button IconButton mlAuto' onClick={handleOpen}>
        <SearchIcon fontSize="small" />
      </IconButton>
    );

  return (
    <Input
      ref={wrapperRef}
      inputRef={inputRef}
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
