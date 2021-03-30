import React from "react";

import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

import useFetchCitiesByCountry from "./useFetchCitiesByCountry";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const CitySelect = (props) => {
  const { country, onChange, onKeyDown, value } = props;

  const classes = useStyles();
  const { data: cities = [] } = useFetchCitiesByCountry(country);

  return (
    <Autocomplete
      value={value}
      size="small"
      id="city-select"
      onChange={onChange}
      clearOnEscape
      disabled={!country}
      style={{ width: 300 }}
      options={cities}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      selectOnFocus
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a city"
          variant="outlined"
          onKeyDown={onKeyDown}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default CitySelect;
