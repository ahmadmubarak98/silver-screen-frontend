import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: 70,

    [theme.breakpoints.up("xl")]: {
      width: 62,
    },

    "& $sectionHeader": {
      padding: theme.spacing(1, 0),
    },
  },
  drawerIcon: {
    transform: "rotate(180deg)",
    transition: theme.transitions.create("transform", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerIconOpen: {
    transform: "rotate(0)",
    transition: theme.transitions.create("transform", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  groupIcon: {
    transform: "rotate(0)",
    transition: theme.transitions.create("transform", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  groupIconOpen: {
    transform: "rotate(180deg)",
    transition: theme.transitions.create("transform", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 2),
  },
  sideBarItem: {
    borderRadius: "8px",
    margin: "10px 4px 0",
    width: 'calc(100% - 8px)',
    paddingLeft: "8px",
    paddingRight: "8px",
    opacity: "0.5",

    "&:hover": {
      opacity: "1",
    },
  },
  sideBarItemOpen: {
    background: "white",
    borderRadius: "8px 8px 0 0",
    opacity: "1",
  },
  sideBarItemIcon: {
    minWidth: "34px",
  },
  sideBarItemIconSvg: {
    fontSize: "18px",
  },
  sideBarItemLabel: {
    fontSize: "11px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  nestedList: {
    backgroundColor: "white",
    borderRadius: "0 0 8px 8px",
    margin: "0 4px 5px",

    "& $sideBarItem": {
      margin: "0",
      width: "100%",
      paddingLeft: theme.spacing(2),
      opacity: "1",
    },
  },
  addPlaceholder: {
    backgroundColor: "white",
    width: "100%",
    padding: "12px 16px",
    display: "flex",
    fontSize: "14px",
    flexGrow: 1,
  },
  addIcon: {
    marginRight: "5px",
  },
}));

export default useStyles;
