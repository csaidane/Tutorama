import React, { Fragment } from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import "./SearchResultsPage.scss";
import axios from "axios";


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
}));

export default function ReviewTutorProfile(props) {
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

  const sendAPI = function(){
    let message = {content:"default message", receiver_id:props.tutor.tutor_id, sender_id: props.userId}
    axios({ url: "/api/users/messages/add", data: message, method: "POST" })
    .then((results)=>{
      props.setInterlocutor({their_id:props.tutor.tutor_id, their_name:props.tutor.name})

      console.log("we here")
      return axios({baseURL:'/', url:`api/users/${props.userId}/messages/${props.tutor.tutor_id}`, method:"GET"})
    })
    .then((results)=>{
      props.setMessageConversation(results.data.messages)
      history.push('/messages')
    })
    
  }

  const reviews = props.reviews.map((review) => {
    return (
      <Fragment>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={review.profile_picture_url}
          />
          <Grid item lg={12} md={12} xs={12}>
            <CardContent>
              <Typography component="h2" variant="h6">
                {review.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Location: {review.city}
              </Typography>
              <p className="descinReview">{review.comment}</p>
              <Typography variant="subtitle1" color="primary">
                Rating:{" "}
                {[...Array(parseInt(rate))].map((star, i) => {
                  return <StarRateIcon style={{ color: "#f99f02" }} key={i} />;
                })}
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      </Fragment>
    );
  });

  return (
    <Container>
      <Grid className={classes.shiftRight} item lg={12}>
        <Grid className={classes.root}>
          <Paper elevation={0}>
            <Fab
              className={classes.marginBackBtn}
              variant="extended"
              onClick={() => {
                history.goBack();
                history.goBack();
              }}
            >
              {" "}
              //TODO: FIX THIS NASTY HACK
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
                <Link component="button" onClick={sendAPI} style={{ textDecoration: "none" }}>
                  <Fab
                    className={classes.marginBackBtn}
                    variant="extended"
                    color="primary"
                  >
                    <SendOutlinedIcon className={classes.extendedIcon} />
                    Send a message
                  </Fab>
                </Link>
                <RateDialog setReviews={props.setReviews} APIGetReviews={props.APIGetReviews} userId={props.userId} tutor={props.tutor} />
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
              {reviews}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
