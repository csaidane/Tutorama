import React from "react";
import Navbar from "./components/Navbar.jsx";
import TutorCards from "./components/TutorCards.jsx";
import Signin from "./components/SignIn/SignIn";
import SignUpStudent from "./components/SignUp/SignUpStudent";
import SignUpTutor from "./components/SignUp/SignUpTutor";
import SignUpPage from "./components/SignUp/SignUpPage";
import SearchField from "./components/HomePage/SearchField";
import HowWorks from "./components/HomePage/HowWorks";
import FindSubjects from "./components/FindSubjects.jsx";
import TopLayerProfile from "./components/ProfilePage/TopLayerProfile";
import BottomLayerProfile from "./components/ProfilePage/BottomLayerProfile";
import RateDialog from "./components/RatingAndComment/RateDialog";
import ProfileBoxItem from "./components/SearchResults/ProfileBoxItem.jsx";
import FilterBar from "./components/SearchResults/FilterBar.jsx";
import MessagePage from "./components/DirectMessages/MessagePage";

function App() {
  return (
    <div>
      <Navbar />
      {/* <ProfileBoxItem /> */}
      {/* <FilterBar /> */}
      {/* <ProfileBoxItem /> */}
      {/* <MessagePage /> */}
      {/* <Signin /> */}
      {/* <RateDialog /> */}
      {/* <SearchField /> */}
      {/* <HowWorks /> */}
      {/* <FindSubjects /> */}
      {/* <SignUpPage /> */}
      {/* <SignUpTutor /> */}
      {/* <StarRating /> */}
      {/* <SignUpStudent /> */}
      {/* <TutorCards /> */}
      {/* <TopLayerProfile />
      <BottomLayerProfile /> */}
    </div>
  );
}

export default App;
