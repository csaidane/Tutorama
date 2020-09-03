import React, { Fragment, Container } from "react";

import { makeStyles, Grid } from "@material-ui/core";
import HowWorks from "./HowWorks";
import SearchField from "./SearchField";
import FindSubjects from "./FindSubjects";
import ScrollToTop from "./ScrollToTop";

const useStyles = makeStyles((theme) => ({
  shiftRight: {
    marginLeft: "15%",
    // margin: "auto",
  },
  image: {
    backgroundImage: "url(../img/background.png)",
    height: "400px",
    backgroundSize: "cover",
    boxShadow: "25px 25px 50px 50px white inset",
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid className={classes.shiftRight}>
        <SearchField />
        <HowWorks />
        <FindSubjects />
        <ScrollToTop />
      </Grid>
    </Fragment>
  );
}
