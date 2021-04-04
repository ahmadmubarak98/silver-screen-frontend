import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";

// components
import { Button, Collapse, IconButton, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  CloseRounded,
  ExpandMoreRounded,
  PinDropRounded,
} from "@material-ui/icons";
import { CountrySelect } from "components/atoms/inputs/CountrySelect";
import { CitySelect } from "components/atoms/inputs/CitySelect";

// redux
import { useDispatch } from "react-redux";
import { employeeActions } from "~Store";

const useStyles = makeStyles((theme) => ({
  toolbarMenuButton: {
    background: "#E2E2E2",
    borderRadius: "8px",
    padding: "6px 14px",
    marginRight: "10px",
    textTransform: "initial",
  },
}));

const LocationSortMenu = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [country, setCountry] = useState({});
  const [city, setCity] = useState("");

  // clear city when clearing country
  useEffect(() => {
    if (!country.label) {
      setCity("");
      dispatch(
        employeeActions.filter({
          filterBy: [],
        })
      );
    }
  }, [country, dispatch]);

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  const handleClick = (event) => {
    if (event.defaultPrevented) return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    dispatch(
      employeeActions.filter({
        filterBy: [
          country.label && ["country", country.label],
          city && ["city", city],
        ].filter(Boolean),
      })
    );
  };

  const handleClear = (event) => {
    event.preventDefault();
    setCountry({});
    setCity("");
  };

  // ----------------------------------------
  // Utils
  // ----------------------------------------

  const preventEventBubblingOnTab = (event) => {
    if (event.key === "Tab") {
      event.stopPropagation();
    }
  };

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const computedLabel = useMemo(() => {
    if (country.label) {
      if (city !== "") return `${country.code} - ${city}`;
      return country.label;
    }
    return "Location";
  }, [city, country]);

  const computedIcon = useMemo(() => {
    if (computedLabel === "Location") return <ExpandMoreRounded />;

    return (
      <IconButton size="small" onClick={handleClear}>
        <CloseRounded style={{ fontSize: "15px" }} />
      </IconButton>
    );
  }, [computedLabel]);

  return (
    <>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<PinDropRounded />}
        endIcon={computedIcon}
        className={styles.toolbarMenuButton}
      >
        {computedLabel}
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        variant="menu"
        classes={{
          paper: "DropdownMenu",
        }}
      >
        <div className="LocationSortOption">
          <CountrySelect
            autoFocus={anchorEl !== null}
            value={country}
            onChange={(event, country) => {
              if (!country) setCountry({});
              else setCountry(country);
            }}
            onKeyDown={preventEventBubblingOnTab}
          />
        </div>
        <Collapse unmountOnExit in={!!country.label}>
          <div className="LocationSortOption">
            <CitySelect
              value={city}
              country={country.label}
              onChange={(event, city) => {
                if (!city) setCity("");
                else setCity(city);
              }}
              onKeyDown={preventEventBubblingOnTab}
            />
          </div>
        </Collapse>
        <div className="LocationSortOption">
          <Button
            className={clsx("Button", "mlAuto")}
            disableElevation
            onKeyDown={preventEventBubblingOnTab}
            variant="contained"
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            className={clsx("Button", "BlueButton")}
            disableElevation
            disabled={!country.label}
            variant="contained"
            onKeyDown={preventEventBubblingOnTab}
            onClick={handleClose}
          >
            Apply
          </Button>
        </div>
      </Menu>
    </>
  );
};

export default LocationSortMenu;
