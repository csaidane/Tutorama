import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import TutorCards from "./components/TutorCards.jsx";
import Signin from "./components/SignIn/SignIn";
import SignUpStudent from "./components/SignUp/SignUpStudent";
import SignUpTutor from "./components/SignUp/SignUpTutor";
import SignUpPage from "./components/SignUp/SignUpPage";
import SearchField from "./components/HomePage/SearchField";
import HowWorks from "./components/HomePage/HowWorks";
import FindSubjects from "./components/FindSubjects.jsx";
import TopLayerProfile from "./components/ProfilePage/TopLayerProfile";
import BottomLayerProfileTutor from "./components/ProfilePage/BottomLayerProfileTutor";
import BottomLayerProfileStudent from "./components/ProfilePage/BottomLayerProfileStudent";
import RateDialog from "./components/RatingAndComment/RateDialog";
import ProfileBoxItem from "./components/SearchResults/ProfileBoxItem.jsx";
import FilterBar from "./components/SearchResults/FilterBar.jsx";
import MessagePage from "./components/DirectMessages/MessagePage";
import EditProfileTutor from "./components/EditProfile/EditProfileTutor";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
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
    marginLeft: 0,
  },
}));

function App() {
  // For styling
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // For passing in props
  const[state, setState] = useState({user:null, tutor: null})
  const updateUser = function(user){
    setState({...state , user})
  }

  const updateTutor = function(tutor){
    setState({...state , tutor})
  }

  return (
    <Router>
      <div>
        <NavBar open={open} setOpen={setOpen} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Switch>
            <Route path="/signin" exact render={(props)=> <Signin {...props} updateTutor={updateTutor} updateUser={updateUser}/>} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/signup/student" exact render={(props)=> <SignUpStudent {...props} updateUser={updateUser}/>} />
            <Route path="/signup/tutor" exact render={(props)=> <SignUpTutor {...props} updateTutor={updateTutor} updateUser={updateUser}/>} />
            <Route path="/messages" exact component={MessagePage} />
          </Switch>
          {/* <Signin /> */}
          {/* <EditProfile /> */}
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
          {/* <TopLayerProfile /> */}
          {/* <BottomLayerProfileTutor /> */}
          {/* <BottomLayerProfileStudent /> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
