import React, { Fragment } from "react";

import TopLayerProfile from "./TopLayerProfile";
import BottomLayerProfileStudent from "./BottomLayerProfileStudent";

export default function HomePage() {
  return (
    <Fragment>
      <TopLayerProfile />
      <BottomLayerProfileStudent />
    </Fragment>
  );
}
