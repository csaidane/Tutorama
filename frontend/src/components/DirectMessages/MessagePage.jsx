import React, {useEffect, useState} from "react";
import "./MessagePage.scss";
import axios from 'axios'

import MessageList from "./MessageList";
import MessageTextBox from "./MessageTextBox";
import MessageView from "./MessageView";
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//   },
// }));

export default function MessagePage(props) {
  // const classes = useStyles();
  
  const [messageThreads, setMessageThreads] = useState([])

  useEffect(()=>{
    axios({url:`/api/users/${props.userId}/messages/threads`, method:'GET'})
    .then((result)=>{
      let threads = result.data.threads
      console.log(threads)
      setMessageThreads(threads);
    })
  },[])

  

  return (
    <div className="main">
      <div className="list">
        <MessageList messageThreads={messageThreads} />
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
