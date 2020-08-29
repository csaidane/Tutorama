import React from "react";
import TutorCards from "./components/TutorCards";
import Navbar from "./components/Navbar";
import Signin from "./components/SignIn";
import SignUpStudent from "./components/SignUpStudent";
import SignUpTutor from "./components/SignUpTutor";
import SignUpPage from "./components/SignUpPage";
import SearchField from "./components/SearchField";
import HowWorks from "./components/HowWorks";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Signin /> */}
      <SearchField />
      <HowWorks />
      {/* <SignUpPage /> */}
      {/* <SignUpTutor /> */}
      {/* <SignUpStudent /> */}
      {/* <TutorCards /> */}
    </div>
  );
}

export default App;
