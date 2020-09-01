import React, { useState, Fragment } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage/HomePage";
import StudentProfilePage from "./components/ProfilePage/StudentProfilePage";
import TutorProfilePage from "./components/ProfilePage/TutorProfilePage";
import TutorCards from "./components/TutorCards.jsx";
import Signin from "./components/SignIn/SignIn";
import WrongEmailPassword from "./components/SignIn/WrongEmailPassword";
import SignUpStudent from "./components/SignUp/SignUpStudent";
import SignUpTutor from "./components/SignUp/SignUpTutor";
import SignUpPage from "./components/SignUp/SignUpPage";
import SearchField from "./components/HomePage/SearchField";
import HowWorks from "./components/HomePage/HowWorks";
import FindSubjects from "./components/HomePage/FindSubjects";
import RateDialog from "./components/RatingAndComment/RateDialog";
import ProfileBoxItem from "./components/SearchResults/ProfileBoxItem.jsx";
import ReviewTutorProfile from "./components/SearchResults/ReviewTutorProfile.jsx";
import FilterBar from "./components/SearchResults/FilterBar.jsx";
import MessagePage from "./components/DirectMessages/MessagePage";
import EditProfileTutor from "./components/EditProfile/EditProfileTutor";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    height: "100vh",
    padding: "24px 24px 0 24px",
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
  const [state, setState] = useState({ user: null, tutor: null });

  const updateUser = function (user) {
    setState((prev) => ({ ...prev, user }));
  };

  const updateTutor = function (user, tutor) {
    setState((prev) => ({ ...prev, user, tutor }));
  };

  return (
    <Router>
      <Fragment>
        <NavBar
          open={open}
          setOpen={setOpen}
          state={state}
          updateUser={updateUser}
          updateTutor={updateTutor}
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
            <Route path="/homepage" exact component={HomePage} />
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
            <Route path="/messages" exact component={MessagePage} />
            <Route path="/profile" exact component={TutorProfilePage} />
          </Switch>
          {/* <RateDialog /> */}
          {/* <WrongEmailPassword /> */}
          {/* <Signin /> */}
          {/* <EditProfile /> */}
          {/* <ProfileBoxItem /> */}
          {/* <ReviewTutorProfile /> */}
          {/* <FilterBar /> */}
          {/* <ProfileBoxItem /> */}
          {/* <MessagePage /> */}
          {/* <SearchField />
          <HowWorks />
          <FindSubjects /> */}
          {/* <SignUpPage /> */}
          {/* <SignUpTutor /> */}
          {/* <StarRating /> */}
          {/* <SignUpStudent /> */}
          {/* <TutorCards /> */}
          {/* <TopLayerProfile /> */}
          {/* <BottomLayerProfileTutor /> */}
          {/* <BottomLayerProfileStudent /> */}
        </main>
      </Fragment>
    </Router>
  );
}

export default App;
