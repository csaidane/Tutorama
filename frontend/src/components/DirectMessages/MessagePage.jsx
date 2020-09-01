import React from "react";
import "./MessagePage.scss";

import MessageList from "./MessageList";
import MessageTextBox from "./MessageTextBox";
import MessageView from "./MessageView";
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//   },
// }));

export default function MessagePage() {
  // const classes = useStyles();
  return (
    <div className="main">
      <div className="list">
        <MessageList />
      </div>
      <div className="msg">
        <MessageView />
        <div className="text-message-box">
          <MessageTextBox />
        </div>
      </div>
    </div>
  );
}
