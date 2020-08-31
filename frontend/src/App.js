import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signup/student" component={SignUpStudent} />
          <Route path="/signup/tutor" component={SignUpTutor} />
        </Switch>

        {/* <Signin /> */}
        {/* <ProfileBoxItem /> */}
        {/* <FilterBar /> */}
        {/* <ProfileBoxItem /> */}
        {/* <MessagePage /> */}
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
    </Router>
  );
}

export default App;
