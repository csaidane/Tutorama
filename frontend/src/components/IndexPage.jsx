import React from "react";
import "./IndexPage.scss";

import {
  Typography,
  makeStyles,
  Grid,
  Card,
  Box,
  Divider,
  CardContent,
  CardMedia,
} from "@material-ui/core/";

const useStyles = makeStyles({
  card: {
    // margin: "1%",
    marginTop: "2%",
    marginLeft: "3%",
    display: "flex",
    width: "250px",
    height: "450px",
    "&:hover": {
      background: "#303F9F",
      opacity: "0.8",
      borderTop: "solid 1px #cccccc",
      color: "white",
    },
  },

  cardMedia: {
    width: "200px",
    height: "150px",
    borderRadius: "2%",
  },
  box: { display: "flex", flexDirection: "row" },
  heading: { paddingTop: "2%", marginBottom: "0" },
  img: {
    width: "400px",
    height: "550px",
  },
  shiftRight: {
    marginLeft: "15%",
    // margin: "auto",
    backgroundImage:
      "linear-gradient(rgba(238,174,202,1) 0%, rgba(72,209,204,1) 90%)",
    height: "100vh",
    // backgroundSize: "cover",
  },
  nameHeading: {
    fontFamily: "Lora",
    fontSize: "1.5rem",
  },
  title: {
    fontFamily: "Montserrat",
  },
  descr: {
    fontFamily: "Lora",
  },
});

export default function IndexPage() {
  const classes = useStyles();

  return (
    <Grid item sm={12} className={classes.shiftRight}>
      <Grid component="main">
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.heading}
        >
          <h1 id="heading">Hire the right tutor today!</h1>
        </Grid>

        <Box className={classes.box}>
          {/* Card 1  */}
          <Card className={classes.card}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <CardMedia
                className={classes.cardMedia}
                image="https://images.unsplash.com/photo-1551989745-347c28b620e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                title="has 10 reviews"
              />
              <div>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography
                      className={classes.nameHeading}
                      component="h2"
                      variant="h6"
                    >
                      Martha Bosnian
                    </Typography>
                    <Typography className={classes.title} variant="h6">
                      History tutor
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider variant="middle" />

                    <Typography
                      className={classes.descr}
                      variant="subtitle1"
                      paragraph
                    >
                      An experienced tutor with over 5 years of experience ipsum
                      sdkjd jdhsdn h dhnsj aute...
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle1" color="primary">
                    Rating:{" "}
                    <span aria-label="Star" role="img">
                      {" "}
                      ⭐⭐⭐⭐⭐{" "}
                    </span>
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    2 reviews
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          </Card>
          {/* Card 2 */}
          <Card className={classes.card}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <CardMedia
                className={classes.cardMedia}
                image="https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                title="has 10 reviews"
              />
              <div>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography
                      className={classes.nameHeading}
                      component="h2"
                      variant="h6"
                    >
                      Vin Freesto
                    </Typography>
                    <Typography className={classes.title} variant="h6">
                      Literature tutor
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider variant="middle" />

                    <Typography
                      className={classes.descr}
                      variant="subtitle1"
                      paragraph
                    >
                      An experienced tutor with over 5 years of experience ipsum
                      sdkjd jdhsdn h dhnsj aute...
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle1" color="primary">
                    Rating:{" "}
                    <span aria-label="Star" role="img">
                      {" "}
                      ⭐⭐⭐⭐⭐{" "}
                    </span>
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    6 reviews
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          </Card>

          {/* Card 3*/}
          <Card className={classes.card}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <CardMedia
                className={classes.cardMedia}
                image="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                title="has 10 reviews"
              />
              <div>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography
                      className={classes.nameHeading}
                      component="h2"
                      variant="h6"
                    >
                      Garret Richotto
                    </Typography>
                    <Typography className={classes.title} variant="h6">
                      Chemistry tutor
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider variant="middle" />

                    <Typography
                      variant="subtitle1"
                      paragraph
                      className={classes.descr}
                    >
                      An experienced tutor with over 5 years of experience ipsum
                      sdkjd jdhsdn h dhnsj aute...
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle1" color="primary">
                    Rating:{" "}
                    <span aria-label="Star" role="img">
                      {" "}
                      ⭐⭐⭐⭐⭐{" "}
                    </span>
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    11 reviews
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          </Card>
          <Grid>
            <img
              className={classes.img}
              alt=""
              // src="https://cdn.pixabay.com/photo/2017/10/23/10/14/idea-2880595_1280.png"
              src="https://cdn.pixabay.com/photo/2013/07/12/14/07/student-147783_1280.png"
            ></img>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
