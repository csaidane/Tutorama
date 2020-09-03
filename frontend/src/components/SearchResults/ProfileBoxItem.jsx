import React from "react";
import PropTypes from "prop-types";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useHistory } from "react-router-dom";

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

export default function ProfileBoxItem(props) {
  const rate = props.avg.charAt(0);
  let history = useHistory();

  const classes = useStyles();

  return (
    <Container component="main">
      <Grid item xs={10}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card} onClick={() => history.push("/tutor")}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h6">
                  {props.name}
                </Typography>
                <Typography variant="h6">{props.subject} tutor </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  ${props.rate_per_hour}/hour, {props.city}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {props.bio}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Rating:
                  {[...Array(rate)].map((star) => {
                    return <StarRateIcon />;
                  })}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  {props.count} reviews
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cardMedia}
              image={props.profile_picture_url}
            />
          </Card>
        </CardActionArea>
      </Grid>
    </Container>
  );
}
