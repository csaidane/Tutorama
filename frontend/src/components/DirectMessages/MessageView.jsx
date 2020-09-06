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
    marginTop: "25px",
    backgroundColor: "blue",
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
    marginTop: "3%",
    marginRight: "3%",

    backgroundColor: "green",
    color: "white",
    width: "300px",
    borderRadius: "10px",
  },

  chatHeader: {
    marginTop: "1.5%",
    width: "calc(100% - 293px)",
    transition: "none",
    height: "50px",
    backgroundColor: "#344195",
    position: "fixed",
    // marginLeft: "301px",
    fontSize: "18px",
    textAlign: "center",
    color: "white",
    paddingTop: "10px",
    boxSizing: "border-box",
  },
}));

export default function MessageView(props) {
  const classes = useStyles();

  let messageConversation = props.messageConversation.map((result, i) => {
    //Let's note that result also contains the sent date and the profile picture.
    //We may be able to use this to increase the look of the UI
    return (
      <div key={i}>
        <li
          className={
            result.sender_id === props.interlocutor.their_id
              ? classes.userSent
              : classes.tutorSent
          }
        >
          {result.content}
        </li>
      </div>
    );
  });

  return (
    <div>
      <div className={classes.chatHeader}>
        {props.interlocutor.their_name && "Your conversation with"}{" "}
        {props.interlocutor.their_name}
      </div>
      <article className={"msg-list-container"}>
        <ul className="msg-list">{messageConversation}</ul>
      </article>
    </div>
  );
}
