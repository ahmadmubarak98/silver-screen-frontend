import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

// components
import { Button, ButtonGroup } from "@material-ui/core";
import { SortByAlphaRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

// redux
import { useDispatch } from "react-redux";
import { employeeActions } from "~Store";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
  },
  toggler: {
    marginRight: "10px",
    borderRadius: "8px",
    padding: "8px 9px",

    "&:hover": {
      backgroundColor: "#222",
      color: "white",
    },
  },
  togglerOpen: {
    backgroundColor: "#101010",
    color: "white",

    "&:hover": {
      backgroundColor: "#101010",
    },
  },
  togglerIcon: {
    fontSize: "18px",
  },
  letters: {
    display: "flex",
    alignItems: "center",
    marginRight: 10,
  },
  letter: {
    fontSize: "14px",
    padding: "8px 5px",
    color: "#868686",
    textTransform: "uppercase",
    cursor: "pointer",

    "&:hover": {
      color: "black",
    },
  },
  activeLetter: {
    color: "black",
  },
}));

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const AlphaSorter = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedLetter, setSelectedLetter] = useState("");

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSelectedLetter("");
    dispatch(
      employeeActions.filter({
        filterBy: [],
      })
    );
  }, [dispatch]);

  const handleFilter = useCallback(
    (event, letter) => {
      setSelectedLetter(letter);
      dispatch(
        employeeActions.filter({
          filterBy: [
            ["name", (row) => row.name.startsWith(letter.toUpperCase())],
          ],
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (activeTab === "all") handleClose();
    else handleOpen();
  }, [activeTab, handleOpen, handleClose]);

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const renderLetters = () => (
    <div className={styles.letters}>
      {alphabet.map((letter) => (
        <div
          key={letter}
          onClick={(event) => handleFilter(event, letter)}
          className={clsx(
            styles.letter,
            selectedLetter === letter && styles.activeLetter
          )}
        >
          {letter}
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <ButtonGroup disableElevation variant="contained" className="mrXs">
        <Button
          className={clsx(
            "Button",
            activeTab === "all" && "BlackButton",
            "IconButton",
            "mr0"
          )}
          onClick={() => setActiveTab("all")}
        >
          All
        </Button>
        <Button
          className={clsx(
            "Button",
            activeTab === "az" && "BlackButton",
            "IconButton"
          )}
          onClick={() => setActiveTab("az")}
        >
          <SortByAlphaRounded
            className={styles.togglerIcon}
            style={{ fontSize: 16 }}
          />
        </Button>
      </ButtonGroup>

      {open && renderLetters()}
    </div>
  );
};

export default AlphaSorter;
