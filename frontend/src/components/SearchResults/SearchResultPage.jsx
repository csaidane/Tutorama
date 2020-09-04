import React, { Fragment, useCallback } from "react";
import FilterBar from "./FilterBar";
import ProfileBoxItem from "./ProfileBoxItem";
import ReviewTutorProfile from "./ReviewTutorProfile";

export default function SearchResultPage(props) {
  let searchResults = props.searchResult.map((result) => {
    return <ProfileBoxItem key={result.tutor_id} {...result} />;
  });

  const onSearch = useCallback(
    function (searchCriteria) {
      console.log(searchCriteria, "HELLLLLO");
      let searchResult;
      if (searchCriteria.sortBy === "10") {
        searchResult = props.searchResult.sort(
          (a, b) => b.rate_per_hour - a.rate_per_hour
        );
        searchResults = searchResult.map((result) => {
          return <ProfileBoxItem key={result.tutor_id} {...result} />;
        });
      }
    },
    [props]
  );

  return (
    <Fragment>
      <FilterBar onSearch={onSearch} />
      {searchResults}
    </Fragment>
  );
}
