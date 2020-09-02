import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Avatar,
  Box,
  Typography,
  Container,
  Link,
  Fab,
  Divider,
  Grid,
  CardMedia,
  CardContent,
  Button,
  Card,
} from "@material-ui/core/";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import RateDialog from "../RatingAndComment/RateDialog.jsx";

import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    display: "flex",
    // justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: "5%",
      width: theme.spacing(150),
      height: theme.spacing(40),
    },
    // textAlign: "center"
  },
  img: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    // marginLeft: "5%",
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  divider: {
    border: `1px solid ${theme.palette.divider}`,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  infoGrid: {
    margin: "5%",
    marginTop: "0",
  },
  card: {
    display: "flex",
    width: "800px",

    justifyContent: "row",
  },

  cardMedia: {
    margin: "3%",
    width: 150,
    height: 150,
    borderRadius: "70%",
  },
}));

function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.img}>
      <Avatar
        alt="Remy Sharp"
        src="https://images.unsplash.com/photo-1555436169-38f939820724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        className={classes.large}
      />
    </div>
  );
}

export default function ReviewTutorProfile() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Paper elevation={0} rounded>
          <Grid
            xs={12}
            container
            direction="row"
            // justify="flex-start"
            alignItems="center"
          >
            <Grid>
              <ImageAvatars />
              <Typography variant="overline">Rating: ⭐⭐⭐⭐⭐</Typography>
            </Grid>
            <Divider variant="middle" />
            <Grid
              direction="column"
              justify="space-between"
              alignItems="center"
              textAlign="center"
            >
              <Typography a variant="h3">
                David Davidson
              </Typography>
              <Typography variant="overline"> Chemistry tutor, </Typography>
              <Typography variant="overline"> 50$/hour </Typography>
            </Grid>

            <Grid xs={3}> </Grid>
            <Grid>
              <Link to="/messages">
                <Fab variant="extended" color="secondary">
                  <SendOutlinedIcon className={classes.extendedIcon} />
                  Send a message
                </Fab>
              </Link>
            </Grid>
            <Grid xs={3}></Grid>
            <Grid xs={3}></Grid>
            <Grid xs={3}></Grid>

            <Grid>
              {/* {button leave feedback */}
              <RateDialog />
            </Grid>
          </Grid>
        </Paper>
      </div>
      <Paper elevation={0} className={classes.infoGrid}>
        <Grid
          xs={12}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography a variant="h4">
            Education
          </Typography>
          <Typography variant="overline">
            {" "}
            Université de Saint-Boniface
          </Typography>
        </Grid>
      </Paper>
      <Paper elevation={0} className={classes.infoGrid}>
        <Grid
          xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Typography a variant="h4">
            Bio
          </Typography>
          <Typography variant="overline">
            {" "}
            I am a very experienced tutor who loves sharing knowledge Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. hfjd{" "}
          </Typography>
        </Grid>
      </Paper>
      <Paper elevation={0} className={classes.infoGrid}>
        <Grid
          xs={12}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography a variant="h4">
            Reviews
          </Typography>
          {/* Container for a review */}
          <Grid item xs={10}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              />
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h10">
                    Liz Erits
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Location: Montreal
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    This tutor is the best one. This tutor is the best one. This
                    tutor is the best one. This tutor is the best one.
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Rating: ⭐⭐⭐⭐⭐
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
