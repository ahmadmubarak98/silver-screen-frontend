import React, { useEffect, useRef } from "react";

// components
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

// country
import { COUNTRY_NAMES } from "~Constants";

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const CountrySelect = (props) => {
  const { autoFocus, onChange, onKeyDown, value } = props;

  const classes = useStyles();
  const textInputRef = useRef();

  useEffect(() => {
    if (autoFocus) {
      textInputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <Autocomplete
      value={value}
      size="small"
      id="country-select"
      onChange={onChange}
      clearOnEscape
      style={{ width: 300 }}
      options={COUNTRY_NAMES}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      selectOnFocus
      getOptionLabel={(option) => option.label || ""}
      renderOption={(option) => (
        <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.label}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          variant="outlined"
          onKeyDown={onKeyDown}
          inputRef={textInputRef}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default CountrySelect;
