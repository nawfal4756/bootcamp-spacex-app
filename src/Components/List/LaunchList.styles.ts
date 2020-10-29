import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;
export const useStyles = makeStyles({
  root: {
    overflowY: "hidden",
  },
  drawer: {
    width: drawerWidth,
  },
  success: {
    color: "green",
  },
  failed: {
    color: "red",
  },
  drwaerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    justifyContent: "flex-end",
  },
});
