import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./profilePics.style";
import ImageLoader from "react-load-image";
import Spinner from "../spinnerLoader";
interface IProp {
  dataSource: { [key: string]: any };
  profileApi: string;
  name: string;
  userName: string;
}

const Bio: React.FC<IProp> = (props) => {
  const { profileApi, name, userName, dataSource } = props;
  const classes = useStyles();
  if (!profileApi || !name || !userName) {
    return <></>;
  }
  const edges = dataSource && dataSource.edges;
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.wrapper}
      >
        <Grid container className={classes.backGroundWrapper} justify="center">
          {edges.slice(0, 3).map((item: any, index: number) => (
            <img
              key={index}
              src={item.node.display_url}
              alt="profileApi"
              className={classes.backgroundPic}
            />
          ))}
        </Grid>

        <ImageLoader
          src={profileApi}
          alt="profileApi"
          className={classes.mainPic}
        >
          <img />
          <div>Error!</div>
          <Spinner />
        </ImageLoader>
        <h2 style={{ position: "absolute", bottom: "30px" }}>{name}</h2>
        <span style={{ position: "absolute", bottom: "10px" }}>
          @{userName}
        </span>
      </Grid>
      <Grid container className={classes.info}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          item
          xs
          className={classes.separator}
        >
          <span>Engagement rate</span>
          <strong>3.15 %</strong>
        </Grid>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          item
          xs
          className={classes.separator}
        >
          <span>Engagement rate</span>
          <strong>3.15 %</strong>
        </Grid>
      </Grid>
    </>
  );
};
export default Bio;
