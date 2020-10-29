import {
  AppBar,
  Backdrop,
  CircularProgress,
  Divider,
  Drawer as MUIDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { LaunchListQuery } from "../../generated/graphql";
import { useStyles } from "./LaunchList.styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

interface Props {
  data: LaunchListQuery;
  handleNumberChange: (newNumber: number) => void;
  loading: boolean;
  error: boolean;
}

const LaunchList: React.FC<Props> = ({
  data,
  loading,
  error,
  handleNumberChange,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function handleChange(launches: any) {
    setOpen(false);
    handleNumberChange(launches.flight_number);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">SpaceX App</Typography>
        </Toolbar>
      </AppBar>

      <MUIDrawer open={open}>
        <div className={classes.drawer} onKeyDown={() => setOpen(false)}>
          <div className={classes.drwaerHeader}>
            <IconButton onClick={() => setOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {loading ? (
              <Backdrop open={true}>
                <CircularProgress />
              </Backdrop>
            ) : error || !data ? (
              <Typography>ERROR!</Typography>
            ) : (
              data.launches?.map((launches, index) => (
                <div key={launches?.flight_number}>
                  <ListItem button onClick={() => handleChange(launches)}>
                    <ListItemText>
                      <Typography>{`${launches?.mission_name} (${launches?.launch_year})`}</Typography>
                      {launches?.launch_success ? (
                        <Typography className={classes.success}>
                          Successful
                        </Typography>
                      ) : (
                        <Typography className={classes.failed}>
                          Failed
                        </Typography>
                      )}
                    </ListItemText>
                  </ListItem>
                  <Divider />
                </div>
              ))
            )}
          </List>
        </div>
      </MUIDrawer>
    </div>
  );
};

export default LaunchList;
