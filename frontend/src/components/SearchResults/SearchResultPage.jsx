import React, { Fragment } from "react";
import FilterBar from "./FilterBar";
import ProfileBoxItem from "./ProfileBoxItem";
import ReviewTutorProfile from "./ReviewTutorProfile";

export default function SearchResultPage(props) {
  const searchResults = props.searchResult.map((result) => {
    return <ProfileBoxItem key={result.tutor_id} {...result} />;
  });
  return (
    <Fragment>
      <FilterBar />
      {searchResults}
    </Fragment>
  );
}
