import React from "react";
import MessageList from "./MessageList";
import MessageTextBox from "./MessageTextBox";
import MessageView from "./MessageView";
// import { makeStyles } from "@material-ui/core";


export default function MessagePage() {
  // const classes = useStyles();
  return (
    <div className="dashboard-container" id="dashboard-container">
      <MessageList />
      <MessageView />
      <MessageTextBox />
    </div>
  );
}
