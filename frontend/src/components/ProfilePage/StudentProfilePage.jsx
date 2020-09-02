import React, { Fragment } from "react";

import TopLayerProfile from "./TopLayerProfile";
import BottomLayerProfileStudent from "./BottomLayerProfileStudent";

export default function HomePage(props) {
  return (
    <Fragment>
      <TopLayerProfile user={props.user} />
      <BottomLayerProfileStudent user={props.user} />
    </Fragment>
  );
}
