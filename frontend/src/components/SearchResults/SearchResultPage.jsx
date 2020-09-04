import React, { useState } from "react";
import FilterBar from "./FilterBar";
import ProfileBoxItem from "./ProfileBoxItem";
import ReviewTutorProfile from "./ReviewTutorProfile";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core/";
import "./SearchResultsPage.scss";

const useStyles = makeStyles((theme) => ({
  shiftRight: {
    marginLeft: "15%",
    // display: "flex",
    // flexDirection: "column",
    // placeItems: "center",
  },
}));

export default function SearchResultPage(props) {
  console.log(props, "HELLLLLLLO");
  const classes = useStyles();
  const [searchResult, setSearchResult] = useState(props.searchResult);

  // const searchResults = searchResult.map((result) => {
  //   return <ProfileBoxItem key={result.tutor_id} {...result} />;
  // });

  return (
    <div className="searchResultsMain">
      <FilterBar setSearchResult={setSearchResult} />
      {searchResult ? (
        searchResult.map((result) => {
          return <ProfileBoxItem key={result.tutor_id} {...result} />;
        })
      ) : (
        <Typography>
          There are no tutors available in our database that matches your query
        </Typography>
      )}
    </div>
  );
}
