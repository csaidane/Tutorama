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
  image: {},
}));

export default function SearchResultPage(props) {
  const classes = useStyles();
  const [searchResult, setSearchResult] = useState(props.searchResult);

  console.log(searchResult, "TAG");
  const searchResults =
    searchResult.length === 0 ? (
      <Typography> hello </Typography>
    ) : (
      searchResult.map((result) => {
        return (
          <ProfileBoxItem
            reviews={props.reviews}
            APIGetReviews={props.APIGetReviews}
            setReviews={props.setReviews}
            key={result.tutor_id}
            {...result}
          />
        );
      })
    );

  return (
    <div className="searchResultsMain">
      <FilterBar setSearchResult={setSearchResult} />
      {searchResults}
    </div>
  );
}
