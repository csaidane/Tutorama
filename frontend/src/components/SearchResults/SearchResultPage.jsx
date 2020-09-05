import React, { useState, useCallback } from "react";
import FilterBar from "./FilterBar";
import ProfileBoxItem from "./ProfileBoxItem";
import ReviewTutorProfile from "./ReviewTutorProfile";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core/";
import "./SearchResultsPage.scss";

const useStyles = makeStyles((theme) => ({
  shiftRight: {
    marginLeft: "15%",
    backgroundColor: "#FFFFFF",
  },
}));

export default function SearchResultPage(props) {
  const classes = useStyles();
  const [searchResult, setSearchResult] = useState(props.searchResult);

  const searchResults = searchResult.map((result) => {
    return <ProfileBoxItem reviews={props.reviews} APIGetReviews={props.APIGetReviews} setReviews={props.setReviews} key={result.tutor_id} {...result} />;
  });

  // const onSearch = useCallback(
  //   function (searchCriteria) {
  //     console.log(searchCriteria, "HELLLLLO");
  //     let searchResult;
  //     if (searchCriteria.sortBy === "10") {
  //       searchResult = props.searchResult.sort(
  //         (a, b) => b.rate_per_hour - a.rate_per_hour
  //       );
  //       searchResults = searchResult.map((result) => {
  //         return <ProfileBoxItem key={result.tutor_id} {...result} />;
  //       });
  //     }
  //   },
  //   [props]
  // );

  return (
    <div className="searchResultsMain">
      <FilterBar setSearchResult={setSearchResult} />
      {searchResults}
    </div>
  );
}
