import React, { useState } from "react";

import { IconButton } from "@material-ui/core";
import { SortByAlphaRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

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
  },
  letter: {
    fontSize: "14px",
    marginRight: "8px",
    color: "#868686",
    textTransform: "uppercase",
    cursor: "pointer",

    "&:hover": {
      color: "black",
    },
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

const AlphaSorter = () => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const renderLetters = () => (
    <div className={styles.letters}>
      {alphabet.map((letter) => (
        <div key={letter} className={styles.letter}>
          {letter}
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <IconButton
        className={clsx(styles.toggler, { [styles.togglerOpen]: open })}
        onClick={handleToggle}
      >
        <SortByAlphaRounded className={styles.togglerIcon} />
      </IconButton>
      {open && renderLetters()}
    </div>
  );
};

export default AlphaSorter;
