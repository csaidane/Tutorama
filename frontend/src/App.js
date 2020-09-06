import React, { useState, Fragment } from "react";
import clsx from "clsx";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Drawer, Grid } from "@material-ui/core";
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage/HomePage";
import StudentProfilePage from "./components/ProfilePage/StudentProfilePage";
import TutorProfilePage from "./components/ProfilePage/TutorProfilePage";
import IndexPage from "./components/IndexPage.jsx";
import Signin from "./components/SignIn/SignIn";
import SignUpStudent from "./components/SignUp/SignUpStudent";
import SignUpTutor from "./components/SignUp/SignUpTutor";
import MessagePage from "./components/DirectMessages/MessagePage";
import SignUpPage from "./components/SignUp/SignUpPage";
import SearchField from "./components/HomePage/SearchField";
import WrongEmailPassword from "./components/SignIn/WrongEmailPassword";
import HowWorks from "./components/HomePage/HowWorks";
import FindSubjects from "./components/HomePage/FindSubjects";
import RateDialog from "./components/RatingAndComment/RateDialog";
import ProfileBoxItem from "./components/SearchResults/ProfileBoxItem.jsx";
import ReviewTutorProfile from "./components/SearchResults/ReviewTutorProfile.jsx";
import FilterBar from "./components/SearchResults/FilterBar.jsx";
import EditProfileTutor from "./components/EditProfile/EditProfileTutor";
import EditProfileStudent from "./components/EditProfile/EditProfileStudent";
import SearchResultPage from "./components/SearchResults/SearchResultPage";
import NoResultsFound from "./components/SearchResults/NoResultsFound";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    height: "100vh",
    // padding: "24px 24px 0 24px",
    padding: "0px 0px 0 0px",
    backgroundColor: "#FFFFFF",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: "0",
  },
}));

function App() {
  // For styling
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // For passing in props
  const storedUsers = window.localStorage.getItem("user");
  const storedTutors = window.localStorage.getItem("tutor");

  const [state, setState] = useState({
    user: storedUsers && JSON.parse(storedUsers),
    tutor: storedTutors && JSON.parse(storedTutors),
    searchResult: null,
  });

  const updateUser = function (user) {
    user && window.localStorage.setItem("user", JSON.stringify(user));
    setState((prev) => ({ ...prev, user }));
  };

  const updateTutor = function (user, tutor) {
    user && window.localStorage.setItem("user", JSON.stringify(user));
    tutor && window.localStorage.setItem("tutor", JSON.stringify(tutor));
    setState((prev) => ({ ...prev, user, tutor }));
  };

  const updateSearchResult = function (searchResult) {
    console.log("UPDATE SEARCH RESULT", searchResult);
    setState((prev) => ({ ...prev, searchResult }));
  };

  const [reviews, setReviews] = useState([]);
  const [interlocutor, setInterlocutor] = useState({})
  const [messageConversation, setMessageConversation] = useState([])



  const APIGetReviews = function (id) {
    axios({ url: `/api/tutors/profile/${id}`, method: "GET" }).then(
      (result) => {
        setReviews(result.data.reviews);
      }
    );
  };

  return (
    <Grid item lg={12} md={12} id="main">
      <Router>
        <NavBar
          open={open}
          setOpen={setOpen}
          state={state}
          updateUser={updateUser}
          updateTutor={updateTutor}
          setInterlocutor={setInterlocutor}
        />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Switch>
            <Route
              path="/signin"
              exact
              render={(props) => (
                <Signin
                  {...props}
                  updateTutor={updateTutor}
                  updateUser={updateUser}
                />
              )}
            />
            <Route path="/signup" exact component={SignUpPage} />
            {state.user ? (
              <Route
                path="/"
                exact
                render={(props) => (
                  <HomePage
                    {...props}
                    updateSearchResult={updateSearchResult}
                  />
                )}
              />
            ) : (
                <Route path="/" exact component={IndexPage} />
              )}

            <Route
              path="/signup/student"
              exact
              render={(props) => (
                <SignUpStudent {...props} updateUser={updateUser} />
              )}
            />
            <Route
              path="/signup/tutor"
              exact
              render={(props) => (
                <SignUpTutor
                  {...props}
                  updateTutor={updateTutor}
                  updateUser={updateUser}
                />
              )}
            />
            <Route
              path="/messages"
              exact
              render={(props) => (
                <MessagePage setMessageConversation={setMessageConversation} messageConversation={messageConversation} interlocutor={interlocutor} setInterlocutor={setInterlocutor} {...props} userId={state.user && state.user.id} />
              )}
            />
            {state.tutor ? (
              <Route
                path="/profile"
                exact
                render={(props) => <TutorProfilePage {...props} user={state} />}
              />
            ) : (
                <Route
                  path="/profile"
                  exact
                  render={(props) => (
                    <StudentProfilePage {...props} user={state} />
                  )}
                />
              )}
            <Route
              path="/searchresult"
              exact
              render={(props) => (
                <SearchResultPage
                  reviews={reviews}
                  APIGetReviews={APIGetReviews}
                  setReviews={setReviews}
                  searchResult={state.searchResult}
                />
              )}
            />
            <Route
              path="/tutor/:id"
              exact
              render={(props) => {
                const { id } = props.match.params;
                const tutor = state.searchResult.find((r) => r.tutor_id == id);
                return <ReviewTutorProfile setMessageConversation={setMessageConversation} setInterlocutor={setInterlocutor} APIGetReviews={APIGetReviews} setReviews={setReviews} userId={state.user && state.user.id} reviews={reviews} tutor={tutor} />;
              }}
            />
            {state.tutor ? (
              <Route
                path="/editprofile"
                exact
                render={(props) => <EditProfileTutor {...props} user={state} />}
              />
            ) : (
                <Route
                  path="/editprofile"
                  exact
                  render={(props) => (
                    <EditProfileStudent {...props} user={state} />
                  )}
                />
              )}
          </Switch>
          {/* <WrongEmailPassword /> */}
          {/* <Signin /> */}
          {/* <EditProfileStudent /> */}
          {/* <EditProfileTutor /> */}
          {/* <ProfileBoxItem /> */}
          {/* <ReviewTutorProfile /> */}
          {/* <FilterBar /> */}
          {/* <ProfileBoxItem /> */}
          {/* <MessagePage /> */}
          {/* <SearchField />
          <HowWorks />
          <FindSubjects /> */}
          {/* <NoResultsFound /> */}
          {/* <SignUpPage /> */}
          {/* <SignUpTutor /> */}
          {/* <StarRating /> */}
          {/* <SignUpStudent /> */}
          {/* <IndexPage /> */}
          {/* <TopLayerProfile /> */}
          {/* <BottomLayerProfileTutor /> */}
          {/* <BottomLayerProfileStudent /> */}
        </main>
        {/* <RateDialog /> */}
      </Router>
    </Grid>
  );
}

export default App;
