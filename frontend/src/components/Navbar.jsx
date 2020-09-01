import React, { Fragment } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  Button,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EditIcon from "@material-ui/icons/Edit";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SchoolIcon from "@material-ui/icons/School";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  let history = useHistory();

  const { open, setOpen } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const iconDisplay = (index) => {
    if (index === 0) {
      return <AccountBoxIcon />;
    } else if (index === 1) {
      return <MailIcon />;
    } else if (index === 2) {
      return <SchoolIcon />;
    } else {
      return <InboxIcon />;
    }
  };

  const linkPath = (index) => {
    if (index === 0) {
      return "/profile";
    } else if (index === 1) {
      return "/messages";
    } else if (index === 2) {
      return "/mytutor";
    } else {
      return "/profile";
    }
  };
  
  
  let isLoggedIn = props.state.user;
  
  const APILogout = function(event){
    event.preventDefault();
    axios({ url: '/api/users/logout', method: 'POST' })
    .then((result) => {
      props.updateTutor(null,null)
      history.push("/homepage");
    })

  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            to="/homepage"
            variant="h6"
            noWrap
            className={classes.title}
          >
            tutorama
          </Typography>

          {isLoggedIn ? (
            <Link to="/signout">
              <Button onClick={APILogout} color="inherit">Log out</Button>
            </Link>
          ) : (
            <Fragment>
              <Link to="/signup">
                <Button color="inherit">Sign up</Button>
              </Link>
              <Link to="/signin">
                <Button color="inherit">Log in</Button>
              </Link>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            "Profile",
            "Messages",
            "My Tutors",
            "Drafts?",
            "Still-thinking",
          ].map((text, index) => (
            <ListItem button key={text} component={Link} to={linkPath(index)}>
              <ListItemIcon>{iconDisplay(index)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Edit Profile", "Logout"].map((text, index) => (
            <ListItem
              button
              key={text}
              component={Link}
              to={index % 2 === 0 ? "/editprofile" : "/signout"}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <EditIcon /> : <ExitToAppIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
