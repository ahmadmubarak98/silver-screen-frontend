import React, { useCallback, useState } from "react";
import clsx from "clsx";

// components
import { Drawer, IconButton, Typography, Fade } from "@material-ui/core";
import {
  ChevronRight as ChevronIcon,
  FilterListRounded as FilterListIcon,
  PlaylistAddRounded as PlaylistAddIcon,
} from "@material-ui/icons";
import SideBarSection from "./SideBarSection";
import SideBarItem from "./SideBarItem";

import useStyles from "./utils/useStyles";
import "./styles.css";

const SideBar = (props) => {
  const { className, items = [], ...rest } = props;

  const styles = useStyles();
  const [open, setOpen] = useState(true);

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  const handleDrawerToggle = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const renderItem = useCallback(
    (item) => {
      if (Array.isArray(item.items))
        return (
          <SideBarSection
            key={item.label}
            open={open}
            item={item}
            onOpen={setOpen}
          />
        );

      return <SideBarItem key={item.label} item={item} onOpen={setOpen} />;
    },
    [open]
  );

  const stateClasses = clsx({
    [styles.drawerOpen]: open,
    [styles.drawerClose]: !open,
  });
  const rootClasses = clsx(styles.drawer, stateClasses, className);
  const paperClasses = clsx("SideBarPaper", stateClasses); // use css color variable
  const drawerIconClasses = clsx(
    styles.drawerIcon,
    open && styles.drawerIconOpen
  );

  return (
    <Drawer
      variant="permanent"
      className={rootClasses}
      classes={{ paper: paperClasses }}
      {...rest}
    >
      <div className={styles.toolbar}>
        <Fade
          timeout={{ appear: 225, enter: 225, exit: 195 }}
          in={!!open}
          unmountOnExit
        >
          <Typography className="SideBarTitle">
            <FilterListIcon className="SideBarTitleIcon" />
            Filter by
          </Typography>
        </Fade>
        <IconButton
          className={clsx("mlAuto", !open && "mrAuto")}
          onClick={handleDrawerToggle}
        >
          <ChevronIcon className={drawerIconClasses} />
        </IconButton>
      </div>
      <div className="ScrollableContainer">{items.map(renderItem)}</div>
      <div className={styles.sectionHeader}>
        <Fade in={!!open} unmountOnExit>
          <Typography className="SideBarTitle">Favourite List</Typography>
        </Fade>
        <IconButton className={clsx("mlAuto", !open && "mrAuto")} edge="end">
          <PlaylistAddIcon />
        </IconButton>
      </div>
      <Fade in={!!open} unmountOnExit>
        <div className={styles.addPlaceholder}>Add your list here</div>
      </Fade>
    </Drawer>
  );
};

export default SideBar;
