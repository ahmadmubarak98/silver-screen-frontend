import React, { useState } from "react";
import clsx from "clsx";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { DeleteRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Trash } from "components/atoms/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: "80%",
    maxHeight: 435,
  },
}));

const DeleteSelectedEmployees = (props) => {
  const { selectedEmployees } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const hasSelectedEmployees = Object.keys(selectedEmployees).length > 0;

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const renderDialog = () => (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
      classes={{
        paper: classes.paper,
      }}
    >
      <DialogTitle id="confirmation-dialog-title">Delete</DialogTitle>
      <DialogContent dividers>
        <Typography>
          Are you sure you want to delete{" "}
          {Object.keys(selectedEmployees).length} contact
          {Object.keys(selectedEmployees).length > 1 ? "s" : ""}?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          disableElevation
          startIcon={<DeleteRounded />}
          onClick={handleClose}
          color="secondary"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <>
      <Tooltip
        placement="bottom"
        classes={{ tooltip: "NavBarItemTooltip" }}
        title="Delete"
      >
        <span className='mrXxs'>
          <IconButton
            disabled={!hasSelectedEmployees}
            size="small"
            className={clsx("Button", "IconButton")}
            onClick={handleOpen}
          >
            <Trash />
          </IconButton>
        </span>
      </Tooltip>
      {renderDialog()}
    </>
  );
};

export default DeleteSelectedEmployees;
