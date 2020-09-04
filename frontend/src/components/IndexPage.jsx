import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  Grid,
  Card,
  Box,
  Divider,
  CardContent,
  CardMedia,
  Container,
} from "@material-ui/core/";

const useStyles = makeStyles({
  card: {
    margin: "1%",
    marginTop: "3%",
    display: "flex",
    width: "250px",
    height: "450px",
    "&:hover": {
      background: "#FEFC4C",
      borderTop: "solid 1px #cccccc",
    },
  },

  cardMedia: {
    width: "200px",
    height: "150px",
    borderRadius: "2%",
  },
  box: { display: "flex", flexDirection: "row" },
  heading: { marginTop: "6%", marginBottom: "0" },
  img: {
    width: "400px",
    height: "600px",
  },
  shiftRight: {
    marginLeft: "15%",
    // margin: "auto",
  },
});

export default function IndexPage() {
  const classes = useStyles();

  return (
    <div className={classes.shiftRight}>
      <Container
        component="main"
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2019/04/10/12/40/watercolour-4117017_1280.png")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          container
          direction="column"
          // justify="center"
          alignItems="center"
          className={classes.heading}
        >
          <Typography variant="h2">Hire the right tutor today!</Typography>
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
                    <Typography component="h2" variant="h6">
                      Martha Bosnian
                    </Typography>
                    <Typography variant="h6">History tutor</Typography>
                  </Grid>
                  <Grid>
                    <Divider variant="middle" />

                    <Typography variant="subtitle1" paragraph>
                      An experienced tutor with over 5 years of experience ipsum
                      sdkjd jdhsdn h dhnsj aute...
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle1" color="primary">
                    Rating: ⭐⭐⭐⭐⭐
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
                    <Typography component="h2" variant="h6">
                      Martha Bosnia
                    </Typography>
                    <Typography variant="h6">History tutor</Typography>
                  </Grid>
                  <Grid>
                    <Divider variant="middle" />

                    <Typography variant="subtitle1" paragraph>
                      An experienced tutor with over 5 years of experience ipsum
                      sdkjd jdhsdn h dhnsj aute...
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle1" color="primary">
                    Rating: ⭐⭐⭐⭐⭐
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
                    <Typography component="h2" variant="h6">
                      Martha Bosnia
                    </Typography>
                    <Typography variant="h6">History tutor</Typography>
                  </Grid>
                  <Grid>
                    <Divider variant="middle" />

                    <Typography variant="subtitle1" paragraph>
                      An experienced tutor with over 5 years of experience ipsum
                      sdkjd jdhsdn h dhnsj aute...
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle1" color="primary">
                    Rating: ⭐⭐⭐⭐⭐
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    11 reviews
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          </Card>
          <Grid>
            {/* <img
            className={classes.img}
            alt=""
            src="https://cdn.pixabay.com/photo/2013/07/12/14/07/student-147783_1280.png"
          ></img> */}
            <img
              className={classes.img}
              alt=""
              src="https://cdn.pixabay.com/photo/2017/10/23/10/14/idea-2880595_1280.png"
            ></img>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
