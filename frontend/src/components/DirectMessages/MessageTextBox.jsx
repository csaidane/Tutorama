import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import "./MessageTextBox.scss";

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
    width: "90%",
    marginLeft: "25px",
    marginRight: "-30px",
  },
}));

export default function MessageTextBox() {
  const classes = useStyles();

  return (
    <div>
      <TextField
        placeholder="Type your message.."
        fullWidth={true}
        id="chattextbox"
        className={classes.chatTextBox}
      ></TextField>
      <Send className={classes.sendBtn}></Send>
    </div>
  );
}
