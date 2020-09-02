import React, { Fragment, Container } from "react";

import HowWorks from "./HowWorks";
import SearchField from "./SearchField";
import FindSubjects from "./FindSubjects";

export default function HomePage(props) {
  return (
    <Fragment>
      <SearchField {...props} updateSearchResult={props.updateSearchResult} />
      <HowWorks />
      <FindSubjects />
    </Fragment>
  );
}
