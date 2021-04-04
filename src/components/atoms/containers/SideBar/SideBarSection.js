import React, { cloneElement, useState } from "react";
import clsx from "clsx";

// components
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Collapse,
  Tooltip,
} from "@material-ui/core";
import { ExpandMoreRounded as ExpandIcon } from "@material-ui/icons";
import SideBarItem from "./SideBarItem";

import useStyles from "./utils/useStyles";
import "./styles.css";

const SideBarSection = (props) => {
  const { count = 100, onOpen, item, open } = props;
  const styles = useStyles();
  const [subSectionOpen, setSubSectionOpen] = useState(false);

  const isGroupOpen = open === item.label;
  const groupIconClasses = clsx(
    styles.groupIcon,
    isGroupOpen && styles.groupIconOpen
  );

  return (
    <>
      <Tooltip
        disableFocusListener
        title={item.label}
        classes={{ tooltip: "NavBarItemTooltip" }}
        key={item.label}
        placement="right"
      >
        <ListItem
          button
          className={clsx(
            styles.sideBarItem,
            isGroupOpen && styles.sideBarItemOpen
          )}
          onClick={() => onOpen(isGroupOpen ? true : item.label)}
        >
          <ListItemIcon className={styles.sideBarItemIcon}>
            {cloneElement(item.icon, {
              classes: { root: styles.sideBarItemIconSvg },
            })}
          </ListItemIcon>
          <ListItemText
            classes={{ primary: styles.sideBarItemLabel }}
            primary={item.label}
          />
          {count > 0 && (
            <div
              className={clsx(
                "SideBarItemBadge",
                count > 99 && "LargeSideBarItemBadge"
              )}
            >
              {count}
            </div>
          )}
          <ExpandIcon className={groupIconClasses} />
        </ListItem>
      </Tooltip>
      <Collapse
        classes={{ container: styles.nestedList }}
        in={isGroupOpen}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {item.items.map((subItem) => {
            if (Array.isArray(subItem.items))
              return (
                <SideBarSection
                  key={subItem.label}
                  open={subSectionOpen}
                  item={subItem}
                  onOpen={setSubSectionOpen}
                />
              );

            return <SideBarItem key={subItem.label} item={subItem} />;
          })}
        </List>
      </Collapse>
    </>
  );
};

export default SideBarSection;
