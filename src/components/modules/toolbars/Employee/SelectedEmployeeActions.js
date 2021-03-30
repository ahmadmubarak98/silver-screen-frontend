import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

// components
import { Button, IconButton, Tooltip } from "@material-ui/core";
import {
  ArchiveRounded,
  EmailRounded,
  ForumRounded,
  PersonAddRounded as PersonAddIcon,
  PlaylistAddRounded,
  VideocamRounded,
} from "@material-ui/icons";
import DeleteSelectedEmployees from "./DeleteSelectedEmployees";

import "./styles.css";

const SelectedEmployeeActions = (props) => {
  const selectedEmployees = useSelector(({ employee }) => employee.selected);

  const hasSelectedEmployees = selectedEmployees.length > 0;

  const blackButtonClasses = clsx("Button", "BlackButton");
  const blackIconButtonClasses = clsx(blackButtonClasses, "IconButton");

  return (
    <div className="SelectedEmployeeActions">
      <Button
        disabled={!hasSelectedEmployees}
        className={blackButtonClasses}
        disableElevation
        size="small"
        startIcon={<PersonAddIcon />}
        variant="contained"
      >
        Assign to Project
      </Button>
      <Tooltip
        placement="bottom"
        classes={{ tooltip: "NavBarItemTooltip" }}
        title="Add to List"
      >
        <IconButton
          disabled={!hasSelectedEmployees}
          size="small"
          className={blackIconButtonClasses}
        >
          <PlaylistAddRounded />
        </IconButton>
      </Tooltip>
      <Tooltip
        placement="bottom"
        classes={{ tooltip: "NavBarItemTooltip" }}
        title="Email"
      >
        <IconButton
          disabled={!hasSelectedEmployees}
          size="small"
          className={blackIconButtonClasses}
        >
          <EmailRounded />
        </IconButton>
      </Tooltip>
      <Tooltip
        placement="bottom"
        classes={{ tooltip: "NavBarItemTooltip" }}
        title="Start Chat"
      >
        <IconButton
          disabled={!hasSelectedEmployees}
          size="small"
          className={blackIconButtonClasses}
        >
          <ForumRounded />
        </IconButton>
      </Tooltip>
      <Tooltip
        placement="bottom"
        classes={{ tooltip: "NavBarItemTooltip" }}
        title="Video Call"
      >
        <IconButton
          disabled={!hasSelectedEmployees}
          size="small"
          className={blackIconButtonClasses}
        >
          <VideocamRounded />
        </IconButton>
      </Tooltip>
      <DeleteSelectedEmployees selectedEmployees={selectedEmployees} />
      <Tooltip
        placement="bottom"
        classes={{ tooltip: "NavBarItemTooltip" }}
        title="Archive"
      >
        <IconButton
          disabled={!hasSelectedEmployees}
          size="small"
          className={clsx("Button", "IconButton")}
        >
          <ArchiveRounded />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default SelectedEmployeeActions;
