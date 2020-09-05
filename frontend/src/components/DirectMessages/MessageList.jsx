import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
} from "@material-ui/core";
import axios from "axios";

/*
//This style will be helpful when implementing unread messages notification
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NotificationImportant from "@material-ui/icons/NotificationImportant";
*/

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    // position: "absolute",
    // left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  listItem: {
    cursor: "pointer",
  },
  newChatBtn: {
    borderRadius: "0px",
  },
  /*
  //This style will be helpful when implementing unread messages notification
  unreadMessage: {
    color: "red",
    position: "absolute",
    top: "0",
    right: "5px",
  },
  */
}));

export default function MessageList(props) {
  const classes = useStyles();

  let messageThreads = props.messageThreads;

  const conversationAPI = function(my_id,their_id,their_name){
    axios({url:`api/users/${my_id}/messages/${their_id}`, method:"GET"})
    .then((results)=>{
      props.setMessageConversation(results.data.messages)
      props.setInterlocutor({their_id, their_name})
    })
  }

  const msgList = messageThreads.map((thread) => {
    return (
      <Fragment key={thread.name}>
        <ListItem onClick={() => conversationAPI(props.userId,thread.id,thread.name)} id={thread.id} className={classes.listItem} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={thread.profile_picture_url} />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="h6">{thread.name}</Typography>}
            />
          </ListItem>
          <Divider />
      </Fragment>
    );
  });
  return (
    <div className={classes.root}>
      {/* <Button
        variant="contained"
        fullwidth
        color="primary"
        className={classes.newChatBtn}
      >
        New Message
      </Button> */}
      <List>
        <div key="1">{msgList}</div>
      </List>
    </div>
  );
}
