import React, {Fragment} from "react";
import FilterBar from "./FilterBar"
import ProfileBoxItem from "./ProfileBoxItem"
import ReviewTutorProfile from "./ReviewTutorProfile"

export default function SearchResultPage() {
  return (
    
    < Fragment>
    <FilterBar />
    <ProfileBoxItem />
    <ReviewTutorProfile />
    </Fragment>
      
  );
}