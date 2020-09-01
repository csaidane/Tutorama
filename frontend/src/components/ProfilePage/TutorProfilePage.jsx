import React, { Fragment } from "react";

import TopLayerProfile from "./TopLayerProfile";
import BottomLayerProfileTutor from "./BottomLayerProfileTutor";

export default function HomePage() {
  return (
    <Fragment>
      <TopLayerProfile />
      <BottomLayerProfileTutor />
    </Fragment>
  );
}
