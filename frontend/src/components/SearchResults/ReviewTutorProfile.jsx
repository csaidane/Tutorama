import React, { useState } from "react";
import StarRateIcon from "@material-ui/icons/StarRate";

import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import {
  Paper,
  Avatar,
  Typography,
  Container,
  Link,
  Fab,
  Divider,
  Grid,
  CardMedia,
  CardContent,
  Card,
} from "@material-ui/core/";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import RateDialog from "../RatingAndComment/RateDialog.jsx";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "5%",
      width: theme.spacing(150),
      height: theme.spacing(50),
    },
  },
  img: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    marginLeft: "7%",
    marginTop: "7%",
    width: theme.spacing(30),
    height: theme.spacing(30),
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  infoGrid: {
    margin: "5%",
    marginLeft: "13%",
    marginTop: "0",
  },
  card: {
    display: "flex",
    width: "900px",
    justifyContent: "row",
  },

  cardMedia: {
    margin: "3%",
    width: 150,
    height: 150,
    borderRadius: "70%",
  },
  shiftRight: {
    marginLeft: "10%",
    // margin: "auto",
  },
  shiftRightPrice: {
    marginLeft: "30%",
    // margin: "auto",
  },
  shiftRightName: {
    marginLeft: "10%",
  },
  alignButtons: {
    textAlignLast: "center",
  },
}));

export default function ReviewTutorProfile(props) {
  console.log("TUTOR PROFILE", props);
  const {
    avg,
    bio,
    city,
    count,
    education,
    name,
    profile_picture_url,
    rate_per_hour,
    subject,
  } = props.tutor;
  const rate = avg.charAt(0);
  let history = useHistory();

  const classes = useStyles();

  function ImageAvatars() {
    const classes = useStyles();

    return (
      <div className={classes.img}>
        <Avatar
          alt="Remy Sharp"
          src={profile_picture_url}
          className={classes.large}
        />
      </div>
    );
  }

  return (
    <Container>
      <Grid className={classes.shiftRight} item xs={12}>
        <div className={classes.root}>
          <Paper elevation={0}>
            <Fab variant="extended" onClick={() => history.goBack()}>
              <ArrowBackOutlinedIcon className={classes.extendedIcon} />
              Back to search
            </Fab>
            <Grid
              item
              xs
              zeroMinWidth
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid>
                <ImageAvatars />
                <Typography className={classes.shiftRightPrice} variant="h5">
                  CAD${rate_per_hour}/hour
                </Typography>
                <Typography
                  className={classes.shiftRightPrice}
                  variant="subtitle1"
                  color="primary"
                >
                  {[...Array(parseInt(rate))].map((star, i) => {
                    return <StarRateIcon key={i} />;
                  })}
                </Typography>
              </Grid>

              <Grid>
                <Typography variant="h3" className={classes.shiftRightName}>
                  {name}
                </Typography>
                <Typography
                  variant="overline"
                  className={classes.shiftRightName}
                >
                  {" "}
                  {subject}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                {" "}
              </Grid>
              <Grid className={classes.alignButtons}>
                <Link
                  to="/messages"
                  component="button"
                  style={{ textDecoration: "none" }}
                >
                  <Fab variant="extended" color="primary">
                    <SendOutlinedIcon className={classes.extendedIcon} />
                    Send a message
                  </Fab>
                </Link>
                <RateDialog />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>

              <Grid></Grid>
            </Grid>
          </Paper>
        </div>
        <Grid className={classes.infoGrid}>
          <Grid
            item
            xs={12}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h3">Education</Typography>
            <Typography variant="overline">{education}</Typography>
          </Grid>
        </Grid>
        <Divider variant="inset" style={{ marginBottom: "1%" }} />

        <Grid className={classes.infoGrid}>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h3">Bio</Typography>
            <Typography variant="overline">{bio}</Typography>
          </Grid>
        </Grid>
        <Divider variant="inset" style={{ marginBottom: "1%" }} />

        <Grid className={classes.infoGrid}>
          <Grid
            item
            xs={12}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h3">Reviews</Typography>
            {/* Container for a review */}
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                />
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h6">
                      Liz Erits
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Location: Montreal
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      This tutor is the best one. This tutor is the best one.
                      This tutor is the best one. This tutor is the best one.
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Rating: ⭐⭐⭐⭐⭐
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
