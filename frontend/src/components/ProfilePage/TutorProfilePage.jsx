import React, { Fragment } from "react";

import TopLayerProfile from "./TopLayerProfile";
import BottomLayerProfileTutor from "./BottomLayerProfileTutor";

export default function HomePage(props) {
  return (
    <Fragment>
      <TopLayerProfile user={props.user} />
      <BottomLayerProfileTutor user={props.user} />
    </Fragment>
  );
}
