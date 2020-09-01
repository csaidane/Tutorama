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
  Button,
} from "@material-ui/core";

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

export default function MessageList() {
  const classes = useStyles();

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
        l
        <divdiv key="1">
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="/broken-image.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="h6">Username</Typography>}
              secondary={
                <Fragment>
                  <Typography component="span" color="textPrimary">
                    <p>Hello This is a chat text</p>
                  </Typography>
                </Fragment>
              }
            />
          </ListItem>
          <Divider />
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="/broken-image.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="h6">Username</Typography>}
              secondary={
                <Fragment>
                  <Typography component="span" color="textPrimary">
                    <p>Hello This is a chat text</p>
                  </Typography>
                </Fragment>
              }
            />
          </ListItem>
          <Divider />
        </divdiv>
      </List>
    </div>
  );
}
