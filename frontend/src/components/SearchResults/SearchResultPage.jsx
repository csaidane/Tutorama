import React, { useState } from "react";

import FilterBar from "./FilterBar";
import ProfileBoxItem from "./ProfileBoxItem";
import "./SearchResultsPage.scss";
import NoResultsFound from "./NoResultsFound";

/*
const useStyles = makeStyles((theme) => ({
  shiftRight: {
    marginLeft: "15%",

    backgroundColor: "#FFFFFF",
  },
  image: {},
}));
*/

export default function SearchResultPage(props) {
  const [searchResult, setSearchResult] = useState(props.searchResult);

  const searchResults =
    searchResult.length === 0 ? (
      <NoResultsFound />
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
