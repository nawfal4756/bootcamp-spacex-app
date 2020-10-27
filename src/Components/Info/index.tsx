import { Backdrop, CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useLaunchInfoQuery } from "../../generated/graphql";
import LaunchInfo from "./LaunchInfo";

const LaunchInfoContainer = ({ flightNumber }: any) => {
  const { data, error, loading } = useLaunchInfoQuery({
    variables: { id: `${flightNumber}` },
  });

  if (loading) {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Backdrop open={true}>
              <CircularProgress />
            </Backdrop>
          </Grid>
        </Grid>
      </div>
    );
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchInfo data={data} />;
};

export default LaunchInfoContainer;
