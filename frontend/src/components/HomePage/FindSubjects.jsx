import React from "react";
// import "./HowWorks.scss";

import { makeStyles, Box, Grid, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage:
      // "url('https://image.flaticon.com/icons/svg/891/891733.svg')",
      // "url('https://image.flaticon.com/icons/svg/1361/1361194.svg')",
      "url('https://image.flaticon.com/icons/svg/136/136830.svg')",
    height: "250px",
    width: "150px",
    backgroundSize: "cover",
    // borderRadius: "1%",
    opacity: 5,

    // boxShadow: "25px 25px 50px 50px white inset"
  },
  root: {
    maxWidth: 345,
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
    <div id="searchField">
      <Typography
        className={classes.bottomMargin}
        variant="h3"
        align="center"
        color="textPrimary"
      >
        What subject you need help with?
      </Typography>

      <Box
        display="flex"
        justifyContent="flex-start"
        // alignItems="center"
      >
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
            <Typography variant="h4">Geography </Typography>
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
            <Typography variant="h4">Astronomy</Typography>
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
            <Typography variant="h4">Geometry</Typography>
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
            <Typography variant="h4">Literature </Typography>
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
              <Typography variant="h4">Math</Typography>
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
              <Typography variant="h4">Music</Typography>
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
              <Typography variant="h4">Biology</Typography>
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
              <Typography variant="h4">Social Studies</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
