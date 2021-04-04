import React, { useState } from "react";
import clsx from "clsx";

// components
import { IconButton, InputAdornment, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddRounded, CloseRounded } from "@material-ui/icons";

// utils
import faker from "faker";
import { lang } from "~Utils";

import "./styles.css";

const useStyles = makeStyles(() => ({
  input: {
    "&::placeholder": {
      color: "black",
    },
  },
}));

const AddingList = (props) => {
  const { placeholder = "Add your list here", onAddItem, className } = props;

  const [items, setItems] = useState([]);
  const [newItemLabel, setNewItemLabel] = useState("");
  const styles = useStyles();

  // ----------------------------------------
  // Event handler
  // ----------------------------------------

  const handleAddItem = (event) => {
    if (newItemLabel.trim().length === 0) return;

    const newItem = { label: newItemLabel, id: faker.random.uuid() };
    setItems((prevItems) => [...prevItems, newItem]);

    if (lang.isFunction(onAddItem))
      onAddItem(event, { item: newItem, ...props });

    setNewItemLabel("");
  };

  const handleRemoveItem = (event, item) => {
    event.preventDefault();
    setItems(items.filter((listItem) => listItem.id !== item.id));
  };

  const handleItemClick = (event, item) => {
    if (event.defaultPrevented) return;
  };

  const handleChange = (event) => {
    setNewItemLabel(event.target.value);
  };

  // add item on enter
  const handleKeyDown = (event) => {
    if (event.key !== "Enter") return;

    event.preventDefault();
    handleAddItem(event);
    return;
  };

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const classes = clsx("List", className);

  return (
    <div className={classes}>
      <InputBase
        value={newItemLabel}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="ListAddInput"
        id="list-add-input"
        placeholder={placeholder}
        classes={{ input: styles.input }}
        startAdornment={
          <InputAdornment position="start">
            <AddRounded />
          </InputAdornment>
        }
      />
      {items.length > 0 && (
        <div className="ListItems">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={(event) => handleItemClick(event, item)}
              className="ListItem"
            >
              <span className="ListItemLabel">{item.label}</span>
              <IconButton
                size="small"
                className="ListItemIcon"
                onClick={(event) => handleRemoveItem(event, item)}
              >
                <CloseRounded style={{ fontSize: "15px" }} />
              </IconButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddingList;
