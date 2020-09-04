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
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(-2.5),
    color: "primary",
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },

  image: {
    backgroundImage:
      // "url(https://github.com/katebatrakova/scheduler/blob/master/docs/background.png?raw=true)",
      "url(https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80)",
    height: "100%",
    marginLeft: "5%",
    // marginTop: "4%",
    backgroundSize: "cover",
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
      <Grid item sm={6} xs={12}>
        <div className={classes.paper}>
          <form className={classes.form} id="radioForm" noValidate>
            <h1 className="heading">I am a...</h1>
            <FormControl component="fieldset" style={{ fontSize: "3rem" }}>
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
                  label={<p className="optionText">Student</p>}
                />
                <FormControlLabel
                  value="/signup/tutor"
                  control={<Radio color="primary" />}
                  label={<p className="optionText">Tutor</p>}
                />
              </RadioGroup>
              <Link to={userType} style={{ textDecoration: "none" }}>
                <Button variant="contained" color="secondary">
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
            <h1 className="heading">Why use Tutorama?</h1>
            <FormControl component="fieldset">
              <div>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <DoneOutlineIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <p className="optionText2">
                          {" "}
                          Chat via instant messages with tutors
                        </p>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <DoneOutlineIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <p className="optionText2">
                          {" "}
                          Search for any subject of your interest
                        </p>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <DoneOutlineIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <p className="optionText2"> View tutors' profiles</p>
                      }
                    />{" "}
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <DoneOutlineIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <p className="optionText2">
                          {" "}
                          See real reviews of the tutors
                        </p>
                      }
                    />{" "}
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <DoneOutlineIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <p className="optionText2">
                          {" "}
                          Select a tutor based on your location
                        </p>
                      }
                    />{" "}
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
