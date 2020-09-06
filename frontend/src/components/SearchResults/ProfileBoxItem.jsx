import React from "react";
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
} from "@material-ui/core/";

const useStyles = makeStyles({
  card: {
    marginTop: "10%",
    marginLeft: "20%",
    display: "flex",
    borderTop: "0.5px dashed #303F9F",
    borderBottom: "0.5px dashed #303F9F",
    // borderLeft: "0.5px dashed #303F9F",
    // borderRight: "0.5px dashed #303F9F",
  },
  cardDetails: {
    paddingLeft: "5%",
    flex: 4,
  },
  cardMedia: {
    // marginTop: "6%",
    marginRight: "2%",
    width: 170,
    height: 170,
    borderRadius: "70%",
  },
});

export default function ProfileBoxItem(props) {
  const selectId = function () {
    const tutorId = props.tutor_id;
    props.APIGetReviews(tutorId);
    history.push(`/tutor/${tutorId}`);
  };
  const rate = props.avg.charAt(0);
  let history = useHistory();

  const classes = useStyles();

  return (
    <div>
      <Grid item xs={10}>
        <CardActionArea component="a" onClick={selectId}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h6">
                  {props.name}
                </Typography>
                <Typography variant="h6">{props.subject} tutor </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  ${props.rate_per_hour}/hour, {props.city}
                </Typography>
                <p className="teacherBioSearch">{props.bio}</p>
                <p className="teacherRateSearch">
                  Rating:
                  {[...Array(parseInt(rate))].map((star, i) => {
                    return (
                      <StarRateIcon style={{ color: "#f79f07" }} key={i} />
                    );
                  })}
                </p>
                <p className="teacherRateSearch">
                  {props.count} {props.count <= 1 ? "review" : "reviews"}
                </p>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cardMedia}
              image={props.profile_picture_url}
            />
          </Card>
        </CardActionArea>
      </Grid>
    </div>
  );
}
