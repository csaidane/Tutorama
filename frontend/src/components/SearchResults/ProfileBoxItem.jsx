import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@material-ui/core/";

const useStyles = makeStyles({
  card: {
    marginTop: "10%",
    marginLeft: "20%",
    display: "flex",
  },
  cardDetails: {
    flex: 4,
  },
  cardMedia: {
    marginTop: "6%",
    marginRight: "2%",
    width: 150,
    height: 150,
    borderRadius: "70%",
  },
});

export default function ProfileBoxItem() {
  const classes = useStyles();

  return (
    <Container component="main">
      <Grid item xs={10}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h10">
                  Martha Bosnia
                </Typography>
                <Typography variant="h6">History tutor</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  $35/hour, Montreal
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  An experienced tutor with over 5 years of experience ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute...
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Rating: ⭐⭐⭐⭐⭐
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  10 reviews
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cardMedia}
              image="https://images.unsplash.com/photo-1551989745-347c28b620e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              title="has 10 reviews"
            />
          </Card>
        </CardActionArea>
      </Grid>
    </Container>
  );
}
