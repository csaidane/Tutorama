import React from "react";
import "./SearchResultsPage.scss";

import {
  Typography,
  makeStyles,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core/";

const useStyles = makeStyles({
  card: {
    marginTop: "10%",
    marginLeft: "30%",

    width: "60%",
    height: "50%",
  },
  cardDetails: {
    display: "flex",
    flexDirection: "row",
    placeItems: "center",
    paddingLeft: "13%",
    paddingRight: "13%",
  },
  imgSize: {
    marginLeft: "10%",
    width: "350px",
    height: "250px",
  },
});

export default function ProfileBoxItem() {
  const classes = useStyles();

  return (
    <div>
      <Grid item lg={12}>
        <Card className={classes.card}>
          <CardContent className={classes.cardDetails}>
            <Typography variant="subtitle1" color="textSecondary">
              {" "}
              Currently there's no tutors available for this subject.
            </Typography>
            <img
              className={classes.imgSize}
              alt="noSubjectFound"
              src="https://github.com/katebatrakova/scheduler/blob/master/docs/noData2.jpg?raw=true"
            ></img>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
