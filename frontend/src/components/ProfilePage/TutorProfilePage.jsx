import React from "react";

import TopLayerProfile from "./TopLayerProfile";
import BottomLayerProfileTutor from "./BottomLayerProfileTutor";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  shiftRight: {
    marginLeft: "10%",
    // margin: "auto",
  },
}));

export default function HomePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.shiftRight}>
      <TopLayerProfile user={props.user} />
      <BottomLayerProfileTutor user={props.user} />
    </div>
  );
}
