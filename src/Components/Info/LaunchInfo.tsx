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
            Mission {data.launch?.mission_name}
          </Typography>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Typography variant="h4" className={classes.text}>
            Year: {data.launch?.launch_year}
          </Typography>
        </Grid>
        <Grid item xs={6} lg={4}>
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
        <Grid item xs={6} lg={4}>
          <Typography className={classes.text} variant="h4">
            Site Name: {data.launch?.launch_site?.site_name}
          </Typography>
        </Grid>
        {data.launch?.links?.flickr_images
          ? data.launch.links.flickr_images.map((image) => (
              <Grid item xs={5} md={5} lg={4}>
                <img
                  src={String(image)}
                  alt={String(data.launch?.mission_name)}
                  className={classes.pictures}
                />
              </Grid>
            ))
          : null}
        {data.launch?.links?.video_link ? (
          <Grid item xs={12}>
            <Typography variant="h6">
              <a
                href={String(data.launch.links.video_link)}
                target="_blank"
                rel="noreferrer"
              >
                To watch the video click here.
              </a>
            </Typography>
          </Grid>
        ) : null}
        {data.launch?.links?.wikipedia ? (
          <Grid item xs={12}>
            <Typography variant="h6">
              <a
                href={String(data.launch.links.wikipedia)}
                target="_blank"
                rel="noreferrer"
              >
                For more information about the launch click here.
              </a>
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default LaunchInfo;
