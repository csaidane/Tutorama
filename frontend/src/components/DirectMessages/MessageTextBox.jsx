import React, {useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import "./MessageTextBox.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";



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

export default function MessageTextBox(props) {
  const classes = useStyles();
  let history = useHistory();


  const [newMessage, setNewMessage] = useState("");


  const sendAPI = function(event){
    event.preventDefault();
    console.log('was clicked')
    let message = {content: newMessage, receiver_id:props.interlocutor.their_id, sender_id: props.userId}
    axios({ url: "/api/users/messages/add", data: message, method: "POST" })
    .then((results)=>{
      console.log(results.data)
      setNewMessage("")
    })
  }


  return (
    <div>
      <TextField
        placeholder="Type your message.."
        fullWidth={false}
        id="chattextbox"
        className={classes.chatTextBox}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      ></TextField>
      <Button type="submit"  variant="contained" color="primary"  onClick={sendAPI}>Send</Button>
    
    </div>
  );
}
