import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import { useStyles } from "./LaunchInfo.styles";
import cx from "classnames";

interface Props {
  data: LaunchInfoQuery;
}

const LaunchInfo: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.text}>
            {data.launch?.mission_name}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4" className={classes.text}>
            Year: {data.launch?.launch_year}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {data.launch?.launch_success ? (
            <Typography variant="h4" className={cx(classes.text, classes.true)}>
              Successful
            </Typography>
          ) : (
            <Typography
              variant="h4"
              className={cx(classes.text, classes.false)}
            >
              Failed
            </Typography>
          )}
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.text} variant="h4">
            Site Name: {data.launch?.launch_site?.site_name}
          </Typography>
        </Grid>
        {data.launch?.links?.flickr_images ? (
          <Grid item xs={10} md={10} lg={5}>
            {data.launch.links.flickr_images.map((image) => (
              <img src={String(image)} alt="" className={classes.pictures} />
            ))}
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default LaunchInfo;
