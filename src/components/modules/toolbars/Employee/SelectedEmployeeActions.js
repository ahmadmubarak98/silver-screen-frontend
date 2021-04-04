import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

// components
import { Button, IconButton, Tooltip } from "@material-ui/core";
import {
  PersonAddRounded as PersonAddIcon,
  PlaylistAddRounded,
} from "@material-ui/icons";
import DeleteSelectedEmployees from "./DeleteSelectedEmployees";

import "./styles.css";
import { Archive, Chat, Mail, VideoCall } from "components/atoms/icons";

const SelectedEmployeeActions = (props) => {
  const selectedEmployees = useSelector(({ employee }) => employee.selected);

  const hasSelectedEmployees = Object.keys(selectedEmployees).length > 0;

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
        <span className="mrXxs">
          <IconButton
            disabled={!hasSelectedEmployees}
            size="small"
            className={blackIconButtonClasses}
          >
            <PlaylistAddRounded />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip
        placement="bottom"
        classes={{ tooltip: "NavBarItemTooltip" }}
        title="Email"
      >
        <span className="mrXxs">
          <IconButton
            disabled={!hasSelectedEmployees}
            size="small"
            className={blackIconButtonClasses}
          >
            <Mail />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip
        placement="bottom"
        classes={{ tooltip: "NavBarItemTooltip" }}
        title="Start Chat"
      >
        <span className="mrXxs">
          <IconButton
            disabled={!hasSelectedEmployees}
            size="small"
            className={blackIconButtonClasses}
          >
            <Chat />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip
        placement="bottom"
        classes={{ tooltip: "NavBarItemTooltip" }}
        title="Video Call"
      >
        <span className="mrXxs">
          <IconButton
            disabled={!hasSelectedEmployees}
            size="small"
            className={blackIconButtonClasses}
          >
            <VideoCall />
          </IconButton>
        </span>
      </Tooltip>
      <DeleteSelectedEmployees selectedEmployees={selectedEmployees} />
      <Tooltip
        placement="bottom"
        classes={{ tooltip: "NavBarItemTooltip" }}
        title="Archive"
      >
        <span className="mrXxs">
          <IconButton
            disabled={!hasSelectedEmployees}
            size="small"
            className={clsx("Button", "IconButton")}
          >
            <Archive />
          </IconButton>
        </span>
      </Tooltip>
    </div>
  );
};

export default SelectedEmployeeActions;
