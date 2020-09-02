import React from "react";
// import "./HowWorks.scss";

import { makeStyles, Box, Grid, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  // image: {
  //   backgroundImage:
  //     "url('https://image.freepik.com/free-vector/abstract-bright-yellow-grunge-background_1055-8116.jpg')",
  //   height: "250px",
  //   width: "150px",
  //   backgroundSize: "cover",
  //   // borderRadius: "1%",
  //   opacity: 5,

  //   // boxShadow: "25px 25px 50px 50px white inset"
  // },
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
    marginTop: "5%",
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
        How tutorama works?
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
          >
            <img
              className={classes.imgSize}
              src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/login.png?raw=true"
              alt="login"
            ></img>
            <Typography variant="h4">Login or Sign Up </Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            item
            xs={12}
            md={3}
          >
            <img
              className={classes.imgSize}
              alt="stepImage"
              src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/search.png?raw=true"
            ></img>
            <Typography variant="h4">Search for a tutor</Typography>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            item
            xs={12}
            md={3}
          >
            <img
              className={classes.imgSize}
              alt="stepImage"
              src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/profile.png?raw=true"
            ></img>
            <Typography variant="h4">Review profiles</Typography>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            item
            xs={12}
            md={3}
          >
            <img
              className={classes.imgSize}
              alt="stepImage"
              src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/message.png?raw=true"
            ></img>
            <Typography variant="h4">Message the tutor </Typography>
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
            >
              <img
                className={classes.imgSize}
                alt="stepImage"
                src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/lesson.png?raw=true"
              ></img>
              <Typography variant="h4">Get one-on-one class</Typography>
            </Grid>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              item
              xs={12}
              md={3}
            >
              <img
                className={classes.imgSize}
                alt="stepImage"
                src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/pay.png?raw=true"
              ></img>
              <Typography variant="h4">Pay for the service</Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              item
              xs={12}
              md={3}
            >
              <img
                className={classes.imgSize}
                alt=""
                src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/rate.png?raw=true"
              ></img>
              <Typography variant="h4">Rate your tutor</Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              item
              xs={12}
              md={3}
            >
              <img
                className={classes.imgSize}
                alt=""
                src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/rate.png?raw=true"
              ></img>
              <Typography variant="h4">Rate your tutor</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
