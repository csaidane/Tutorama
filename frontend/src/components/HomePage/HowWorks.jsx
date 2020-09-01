import React from "react";
import "./HowWorks.scss";

import { makeStyles, Avatar, Box, Grid, Typography } from "@material-ui/core/";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import DoneOutlineOutlinedIcon from "@material-ui/icons/DoneOutlineOutlined";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: "url()",
    height: "800px",
    backgroundSize: "cover",
    boxShadow: "25px 25px 50px 50px white inset",
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
    marginBottom: "5%",
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
        className={classes.image}
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
          <Grid item xs={12} md={3}>
            <div className="stepImage">
              <img
                src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/login.png?raw=true"
                alt="login"
              ></img>
              <Typography variant="h4">Login or Sign Up </Typography>
              <Avatar className={classes.avatar}>
                <ArrowForwardOutlinedIcon />
              </Avatar>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="stepImage">
              <img
                alt="stepImage"
                src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/search.png?raw=true"
              ></img>
              <Typography variant="h4">Search for a tutor</Typography>
              <Avatar className={classes.avatar}>
                <ArrowForwardOutlinedIcon />
              </Avatar>
            </div>
          </Grid>

          <Grid item xs={12} md={3}>
            <div className="stepImage">
              <img
                alt="stepImage"
                src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/profile.png?raw=true"
              ></img>
              <Typography variant="h4">Review profiles</Typography>
              <Avatar className={classes.avatar}>
                <ArrowForwardOutlinedIcon />
              </Avatar>
            </div>
          </Grid>

          <Grid item xs={12} md={3}>
            <div className="stepImage">
              <img
                alt="stepImage"
                src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/message.png?raw=true"
              ></img>
              <Typography variant="h4">Sent a message to the tutor </Typography>
              <Avatar className={classes.avatar}>
                <ArrowDownwardOutlinedIcon />
              </Avatar>
            </div>
          </Grid>
          <Grid
            container
            direction="row-reverse"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={3}>
              <div className="stepImage">
                <img
                  alt="stepImage"
                  src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/lesson.png?raw=true"
                ></img>
                <Typography variant="h4">Get one-on-one class</Typography>
                <Avatar className={classes.avatar}>
                  <ArrowBackOutlinedIcon />
                </Avatar>
              </div>
            </Grid>

            <Grid item xs={12} md={3}>
              <div className="stepImage">
                <img
                  alt="stepImage"
                  src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/pay.png?raw=true"
                ></img>
                <Typography variant="h4">Pay for the service</Typography>
                <Avatar className={classes.avatar}>
                  <ArrowBackOutlinedIcon />
                </Avatar>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div alt="stepImage" className="stepImage">
                <img src="https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/rate.png?raw=true"></img>
                <Typography variant="h4">Rate your tutor</Typography>
                <Avatar className={classes.avatar}>
                  <DoneOutlineOutlinedIcon />
                </Avatar>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
