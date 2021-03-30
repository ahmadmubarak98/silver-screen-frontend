import React, { useState } from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import ToolbarMenu from "./ToolbarMenu";

const TableSortMenu = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const items = [
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="Sort by"
        name="sortBy"
        value={value}
        className="TableSortMenu"
        onChange={handleChange}
      >
        <FormControlLabel
          value="By Custom Order"
          label="By Custom Order"
          control={<Radio />}
        />
        <FormControlLabel
          value="First Name, A to Z"
          label="First Name, A to Z"
          control={<Radio />}
        />
        <FormControlLabel
          value="First Name, Z to A"
          label="First Name, Z to A"
          control={<Radio />}
        />
        <FormControlLabel
          value="Recently Added"
          label="Recently Added"
          control={<Radio />}
        />
      </RadioGroup>
    </FormControl>,
  ];

  return <ToolbarMenu label="Sort by" items={items} />;
};

export default TableSortMenu;
