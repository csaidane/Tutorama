import React from "react";

import TopLayerProfile from "./TopLayerProfile";
import BottomLayerProfileStudent from "./BottomLayerProfileStudent";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  shiftRight: {
    marginLeft: "15%",
    // margin: "auto",
  },
}));

export default function HomePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.shiftRight}>
      <TopLayerProfile user={props.user} />
      <BottomLayerProfileStudent user={props.user} />
    </div>
  );
}
