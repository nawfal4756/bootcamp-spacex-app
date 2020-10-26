import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;
export const useStyles = makeStyles({
  drawer: {
    width: drawerWidth
  },
  success: {
    color: "green"
  },
  failed:{
    color: "red"
  }
})