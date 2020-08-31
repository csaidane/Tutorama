import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "calc(100vh - 100px)",
    overflow: "auto",
    padding: "25px",
    marginLeft: "300px",
    boxSizing: "border-box",
    overflowY: "scroll",
    top: "50px",
    width: "calc(100% - 300px)",
    position: "absolute",
  },

  userSent: {
    float: "left",
    clear: "both",
    padding: "20px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#707BC4",
    color: "white",
    width: "300px",
    borderRadius: "10px",
  },

  tutorSent: {
    float: "right",
    clear: "both",
    padding: "20px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#707BC4",
    color: "white",
    width: "300px",
    borderRadius: "10px",
  },

  chatHeader: {
    width: "calc(100% - 301px)",
    height: "50px",
    backgroundColor: "#344195",
    position: "fixed",
    marginLeft: "301px",
    fontSize: "18px",
    textAlign: "center",
    color: "white",
    paddingTop: "10px",
    boxSizing: "border-box",
  },
}));

export default function MessageView() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.chatHeader}>
        Your conversation with Tutor Name
      </div>
      <main className={classes.content}>
        {<div className={classes.userSent}>Message From user1</div>}
        {<div className={classes.tutorSent}>Message From User2</div>}
        {<div className={classes.userSent}>Message From user1</div>}
        {<div className={classes.tutorSent}>Message From User2</div>}
        {<div className={classes.userSent}>Message From user1</div>}
        {<div className={classes.tutorSent}>Message From User2</div>}
        {<div className={classes.userSent}>Message From user1</div>}
        {<div className={classes.tutorSent}>Message From User2</div>}
      </main>
    </div>
  );
}
