import React, { Fragment } from "react";

import HowWorks from "./HowWorks";
import SearchField from "./SearchField";
import FindSubjects from "./FindSubjects";

export default function HomePage() {
  return (
    <Fragment>
      <SearchField />
      <HowWorks />
      <FindSubjects />
    </Fragment>
  );
}
