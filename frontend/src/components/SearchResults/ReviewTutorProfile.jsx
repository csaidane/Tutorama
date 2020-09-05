import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import "./SearchResultsPage.scss";

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
    fontFamily: "Roboto Mono",
    fontSize: "25px",
    marginTop: "3%",
    marginLeft: "20%",
    // margin: "auto",
  },

  alignButtons: {
    textAlignLast: "center",
  },
  marginBackBtn: {
    margin: "4%",
  },
  marginEdu: {
    marginTop: "10%",
  },
  borderReview: {
    borderLeft: "4.5px dashed #303F9F",
  },
}));

export default function ReviewTutorProfile(props) {
  // console.log("TUTOR PROFILE", props);
  const {
    avg,
    bio,

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
      <Grid className={classes.shiftRight} item lg={12}>
        <Grid className={classes.root}>
          <Paper elevation={0}>
            <Fab
              className={classes.marginBackBtn}
              variant="extended"
              onClick={() => history.goBack()}
            >
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
                <p className={classes.shiftRightPrice}>
                  CAD${rate_per_hour}/hour
                </p>
                <Typography
                  className={classes.shiftRightPrice}
                  variant="subtitle1"
                  color="primary"
                >
                  {[...Array(parseInt(rate))].map((star, i) => {
                    return (
                      <StarRateIcon style={{ color: "#f99f02" }} key={i} />
                    );
                  })}
                </Typography>
              </Grid>

              <Grid>
                <h3 className="nameInReview">{name}</h3>
                <p className="titleInReview"> {subject}</p>
              </Grid>

              <Grid item xs={3}>
                {" "}
              </Grid>
              <Grid className={classes.alignButtons}>
                <Link component="button" style={{ textDecoration: "none" }}>
                  <Fab
                    className={classes.marginBackBtn}
                    variant="extended"
                    color="primary"
                  >
                    <SendOutlinedIcon className={classes.extendedIcon} />
                    Send a message
                  </Fab>
                </Link>
                <RateDialog />
              </Grid>
              <Grid item lg={3}></Grid>
              <Grid item lg={3}></Grid>
              <Grid item lg={3}></Grid>

              <Grid></Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid className={classes.infoGrid}>
          <Grid
            item
            lg={12}
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.marginEdu}
          >
            <h4 className="eduInReview">Education</h4>
            <p className="descinReview">{education}</p>
          </Grid>
        </Grid>
        <Divider variant="inset" style={{ marginBottom: "1%" }} />

        <Grid className={classes.infoGrid}>
          <Grid
            item
            lg={12}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <h4 className="eduInReview">Bio</h4>
            <p className="descinReview">{bio}</p>
          </Grid>
        </Grid>
        <Divider variant="inset" style={{ marginBottom: "1%" }} />

        <Grid item lg={12} md={12} xs={12} className={classes.infoGrid}>
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <h4 className="eduInReview">Reviews</h4>
            {/* Container for a review */}
            <Grid item lg={12} md={12} xs={12}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                />
                <Grid item lg={12} md={12} xs={12}>
                  <CardContent>
                    <Typography component="h2" variant="h6">
                      Liz Erits
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Location: Montreal
                    </Typography>
                    <p className="descinReview">
                      This tutor is the best one. This tutor is the best one.
                      This tutor is the best one. This tutor is the best one.
                    </p>
                    <Typography variant="subtitle1" color="primary">
                      Rating: <span role="img"> ⭐⭐⭐⭐⭐ </span>
                    </Typography>
                  </CardContent>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
