import React from "react";
// import TutorCards from "./components/TutorCards";
import Navbar from "./components/Navbar";
import Signin from "./components/SignIn";
import SignUpStudent from "./components/SignUpStudent";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Signin /> */}
      <SignUpPage />
      {/* <SignUpStudent /> */}
    </div>
  );
}

export default App;
