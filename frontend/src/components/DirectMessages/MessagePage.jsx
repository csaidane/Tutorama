import React, { useEffect, useState } from "react";
import "./MessagePage.scss";
import axios from "axios";

import MessageList from "./MessageList";
import MessageTextBox from "./MessageTextBox";
import MessageView from "./MessageView";

export default function MessagePage(props) {
  const [messageThreads, setMessageThreads] = useState([]);
  useEffect(() => {
    axios({
      url: `/api/users/${props.userId}/messages/threads`,
      method: "GET",
    }).then((result) => {
      let threads = result.data.threads;
      setMessageThreads(threads);
    });
  }, [props.userId]);

  return (
    <div className="main">
      <div className="list">
        <MessageList
          setInterlocutor={props.setInterlocutor}
          userId={props.userId}
          setMessageConversation={props.setMessageConversation}
          messageThreads={messageThreads}
        />
      </div>
      <div className="msg">
        <MessageView
          interlocutor={props.interlocutor}
          messageConversation={props.messageConversation}
        />
        <div className="text-message-box">
          {props.interlocutor.their_name && (
            <MessageTextBox
              setMessageConversation={props.setMessageConversation}
              userId={props.userId}
              interlocutor={props.interlocutor}
            />
          )}
        </div>
      </div>
    </div>
  );
}
