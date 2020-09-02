import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SignUpPage.scss";
import {
  Avatar,
  CssBaseline,
  Button,
  FormControlLabel,
  FormControl,
  Grid,
  Box,
  Typography,
  Container,
  Radio,
  RadioGroup,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),

    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },

  image: {
    backgroundImage:
      "url(https://github.com/katebatrakova/scheduler/blob/master/docs/background.png?raw=true)",
    height: "100%",
    marginLeft: "2%",
  },
  spacing: {
    margin: "3%",
  },
}));

export default function SignUpPage() {
  const classes = useStyles();
  const [userType, setUserType] = useState("something");

  const handleChange = (event) => {
    if (userType === "/signup/student") {
      setUserType(event.target.value);
    } else {
      setUserType(event.target.value);
    }
  };
  return (
    <Grid
      container
      className={classes.image}
      direction="row"
      alignItems="center"
    >
      {/* Left part Sign Up */}
      <Grid item sm={6} xs={12} className={classes.shiftRight}>
        <div className={classes.paper}>
          <form className={classes.form} id="radioForm" noValidate>
            <Typography variant="h3" className={classes.spacing}>
              I am a...
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
                value={userType}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="/signup/student"
                  control={<Radio color="primary" />}
                  label="Student"
                />
                <FormControlLabel
                  value="/signup/tutor"
                  control={<Radio color="primary" />}
                  label="Tutor"
                />
              </RadioGroup>
              <Link to={userType} style={{ textDecoration: "none" }}>
                <Button
                  className={classes.spacing}
                  variant="contained"
                  color="secondary"
                >
                  Next
                </Button>
              </Link>
            </FormControl>
          </form>
          <Box mt={5}></Box>
        </div>
      </Grid>

      {/* Right part  */}
      <Grid item sm={6} xs={12}>
        <CssBaseline />
        <div className={classes.paper}>
          <CssBaseline />
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form className={classes.form} id="featureList" noValidate>
            <Typography variant="h3" className={classes.spacing}>
              Why use Tutorama?
            </Typography>
            <FormControl component="fieldset">
              <div>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <MessageOutlinedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary=" Chat via instant messages" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <MessageOutlinedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary=" Chat via instant messages" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <MessageOutlinedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary=" Chat via instant messages" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <MessageOutlinedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary=" Chat via instant messages" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <MessageOutlinedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary=" Chat via instant messages" />
                  </ListItem>
                </List>
              </div>
            </FormControl>
          </form>
        </div>{" "}
      </Grid>
    </Grid>
  );
}
