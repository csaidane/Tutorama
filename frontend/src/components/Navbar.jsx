import React, { Fragment } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./IndexPage.scss";

import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  Grid,
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
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "black",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  //appbaronscroll
  appBarScroll: {
    backgroundColor: "white",
    // boxShadow: "none",
    color: "black",
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
    color: "black",
    marginLeft: "1%",
    // marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    marginLeft: "2%",
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

  buttonLoginMargin: {
    marginRight: "3%",
    marginLeft: "3%",
  },
  logo: {
    height: "25px",
    width: "25px",
  },
}));

export default function NavBar(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    // target: props.window ? window() : undefined,
  });

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

  let isLoggedIn = props.state.user || props.state.tutor;

  const APILogout = function (event) {
    event.preventDefault();
    axios({ url: "/api/users/logout", method: "POST" }).then((result) => {
      history.push("/");
      props.updateTutor(null, null);
      props.setInterlocutor({});
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        // color="transparent"
        position="fixed"
        className={
          trigger
            ? clsx(classes.appBarScroll, {
                [classes.appBarShift]: open,
              })
            : clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })
        }
      >
        <Toolbar>
          {isLoggedIn ? (
            <Fragment>
              <IconButton
                style={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Fragment>
          ) : null}

          <Typography
            style={{ textDecoration: "none" }}
            component={Link}
            to="/"
            variant="h5"
            noWrap
            className={classes.title}
          >
            <img
              className={classes.logo}
              src="https://image.flaticon.com/icons/svg/2466/2466682.svg"
            ></img>
            tutorama
          </Typography>

          {isLoggedIn ? (
            <Fragment>
              <Typography variant="h6" style={{ fontFamily: "Lora" }}>
                Hello {props.state.user.name}!
              </Typography>
              <Link
                to="/signout"
                className={classes.buttonLoginMargin}
                style={{ textDecoration: "none" }}
              >
                <Button onClick={APILogout} variant="contained" color="primary">
                  Log out
                </Button>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary">
                  Sign up
                </Button>
              </Link>
              <Link
                to="/signin"
                style={{ textDecoration: "none" }}
                className={classes.buttonLoginMargin}
              >
                <Button variant="contained" color="primary">
                  Log in
                </Button>
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
          {["Profile", "Messages"].map((text, index) => (
            <ListItem
              button
              key={text}
              component={Link}
              to={index === 0 ? "/profile" : "/messages"}
            >
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
              onClick={index % 2 === 0 ? null : APILogout}
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
