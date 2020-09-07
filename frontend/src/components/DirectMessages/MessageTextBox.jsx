import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./MessageTextBox.scss";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  sendBtn: {
    color: "blue",
    cursor: "pointer",
    "&:hover": {
      color: "gray",
    },
  },

  chatTextBoxContainer: {
    position: "absolute",
    bottom: "15px",
    left: "315px",
    boxSizing: "border-box",
    overflow: "auto",
    width: "100%",
  },

  chatTextBox: {
    width: "85%",
    marginLeft: "25px",
    // marginRight: "-30px",
    marginRight: "3%",
  },
}));

export default function MessageTextBox(props) {
  const classes = useStyles();

  const [newMessage, setNewMessage] = useState("");

  const sendAPI = function (event) {
    event.preventDefault();
    let message = {
      content: newMessage,
      receiver_id: props.interlocutor.their_id,
      sender_id: props.userId,
    };
    axios({ url: "/api/users/messages/add", data: message, method: "POST" })
      .then((results) => {
        setNewMessage("");
        return axios({
          url: `api/users/${props.userId}/messages/${props.interlocutor.their_id}`,
          method: "GET",
        });
      })
      .then((results) => {
        props.setMessageConversation(results.data.messages);
      });
  };

  return (
    <div style={{ marginTop: "2%", marginBottom: "7%" }}>
      <TextField
        placeholder="Type your message.."
        fullWidth={false}
        id="chattextbox"
        className={classes.chatTextBox}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      ></TextField>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={sendAPI}
      >
        Send
      </Button>
    </div>
  );
}
