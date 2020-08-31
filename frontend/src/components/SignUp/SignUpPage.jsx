import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SignUpPage.scss";
import {
  Avatar,
  CssBaseline,
  Button,
  FormControlLabel,
  FormLabel,
  FormControl,
  Grid,
  Box,
  Typography,
  Container,
  Radio,
  RadioGroup,
  Paper,
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
    marginTop: theme.spacing(18),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },

  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=955&q=80)",
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
    <Container component="main">
      <Grid container spacing={1}>
        {/* Left part Sign Up */}
        <Grid item sm={6} xs={12}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
          </div>
          <form className={classes.form} id="radioForm" noValidate>
            <Typography component="h1" variant="h5">
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
              <Link to={userType}>
                <Button variant="contained" color="secondary">
                  Next
                </Button>
              </Link>
            </FormControl>
          </form>
          <Box mt={5}></Box>
        </Grid>

        {/* Right part  */}
        <Grid item sm={6} xs={12}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <WbIncandescentOutlinedIcon />
            </Avatar>
            <form className={classes.form} id="featureList" noValidate>
              <Typography component="h1" variant="h5">
                Why use Tutorama?
              </Typography>
              <FormControl component="fieldset">
                <div className={classes.demo}>
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
    </Container>
  );
}
