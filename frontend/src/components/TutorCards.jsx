import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  Box,
  Divider,
  CardContent,
  CardMedia,
  Container,
} from "@material-ui/core/";

const useStyles = makeStyles({
  card: {
    margin: "1%",
    marginTop: "15%",
    display: "flex",
    width: "250px",
    height: "450px",
  },

  cardMedia: {
    width: "200px",
    height: "150px",
    // borderRadius: "60%"
  },
  box: { display: "flex", flexDirection: "row" },
});

export default function TutorCards() {
  const classes = useStyles();

  return (
    <Container component="main">
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
                <Grid direction="column" justify="center" alignItems="center">
                  <Typography component="h2" variant="h10">
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
                <Grid direction="column" justify="center" alignItems="center">
                  <Typography component="h2" variant="h10">
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
                <Grid direction="column" justify="center" alignItems="center">
                  <Typography component="h2" variant="h10">
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
      </Box>
    </Container>
  );
}
