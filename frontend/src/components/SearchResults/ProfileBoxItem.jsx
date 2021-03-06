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
    border: "0.5px solid #303F9F",
    "&:hover": {
      boxShadow: "0px 20px 40px",
      transform: "scale(1.05, 1.05)",
    },
  },
  cardDetails: {
    paddingLeft: "5%",
    flex: 4,
  },
  cardMedia: {
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
      <Grid item lg={12} md={12} xs={12}>
        <Card className={classes.card}>
          <CardActionArea
            style={{ display: "flex" }}
            component="a"
            onClick={selectId}
          >
            <div className={classes.cardDetails}>
              <CardContent>
                <h3 className="teacherNameSearch">{props.name}</h3>
                <p className="teacherTitleSearch">{props.subject} tutor </p>
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
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
}
