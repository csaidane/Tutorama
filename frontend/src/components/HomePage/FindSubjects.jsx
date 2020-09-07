import React from "react";
import "./FindSubjects.scss";

import { makeStyles, Grid } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "250px",
    width: "150px",
    backgroundSize: "cover",
    // borderRadius: "1%",
    opacity: 5,

    // boxShadow: "25px 25px 50px 50px white inset"
  },
  root: {
    marginLeft: "10%",
    marginRight: "10%",
  },
  media: {
    height: 140,
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  bottomMargin: {
    marginBottom: "2%",
    marginTop: "2%",
  },
  imgSize: {
    marginTop: "10%",
    marginBottom: "5%",
    width: "150px",
    height: "150px",
    borderRadius: "4%",
    "&:hover": {
      border: "",
      boxShadow: "4px 4px 4px 4px grey ",
    },
  },
}));

export default function HowWorks() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 id="heading" align="center">
        What subject you need help with?
      </h2>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          item
          xs={12}
          md={3}
          className={classes.image}
        >
          <img
            className={classes.imgSize}
            src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/geography.png?raw=true"
            alt="login"
          ></img>
          <p className="stepText">Geography </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          item
          xs={12}
          md={3}
          className={classes.image}
        >
          <img
            className={classes.imgSize}
            alt="stepImage"
            src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/astronomy.png?raw=true"
          ></img>
          <p className="stepText">Astronomy</p>
        </Grid>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.image}
          item
          xs={12}
          md={3}
        >
          <img
            className={classes.imgSize}
            alt="stepImage"
            src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/geometry.png?raw=true"
          ></img>
          <p className="stepText">Geometry</p>
        </Grid>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          item
          xs={12}
          md={3}
          className={classes.image}
        >
          <img
            className={classes.imgSize}
            alt="stepImage"
            src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/literature.png?raw=true"
          ></img>
          <p className="stepText">Literature </p>
        </Grid>
        {/* Next row  */}

        <Grid
          container
          direction="row-reverse"
          justify="center"
          alignItems="flex-start"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            item
            xs={12}
            md={3}
            className={classes.image}
          >
            <img
              className={classes.imgSize}
              alt="stepImage"
              src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/math.png?raw=true"
            ></img>
            <p className="stepText">Math</p>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            item
            xs={12}
            md={3}
            className={classes.image}
          >
            <img
              className={classes.imgSize}
              alt="stepImage"
              src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/music.png?raw=true"
            ></img>
            <p className="stepText">Music</p>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            item
            xs={12}
            md={3}
            className={classes.image}
          >
            <img
              className={classes.imgSize}
              alt=""
              src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/biology.png?raw=true"
            ></img>
            <p className="stepText">Biology</p>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            item
            xs={12}
            md={3}
            className={classes.image}
          >
            <img
              className={classes.imgSize}
              alt=""
              src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/socialStudies.png?raw=true"
            ></img>
            <p className="stepText">Social Studies</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
