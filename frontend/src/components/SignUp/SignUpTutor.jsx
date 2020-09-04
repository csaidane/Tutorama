import React, { useState } from "react";
import "./SignUpPage.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";

import {
  Avatar,
  CssBaseline,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
} from "@material-ui/core/";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "81%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  shiftRight: {
    marginLeft: "23%",
  },
  spacingTypo: {
    margin: "3%",
  },
  image: {
    backgroundImage:
      // "url(https://github.com/katebatrakova/scheduler/blob/master/docs/background.png?raw=true)",
      "url(https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80)",
    height: "1100px",
    marginLeft: "10%",
    // marginTop: "4%",
    backgroundSize: "cover",
  },
}));

export default function SignUpTutor(props) {
  const classes = useStyles();

  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [education, setEducation] = useState("");
  const [bio, setBio] = useState("");
  const [rate, setRate] = useState("");
  const [subject, setSubject] = useState("");

  const APISubmit = function (event) {
    event.preventDefault();
    let user = {
      name,
      email,
      password,
      street: address,
      city,
      province,
      post_code: zip,
      education,
      rate,
      bio,
      subject,
    };
    axios({ url: "/api/tutors/register", data: user, method: "POST" }).then(
      (result) => {
        props.updateTutor(result.data.user, result.data.tutor);
        history.push("/");
      }
    );
  };

  return (
    <div className={classes.image}>
      <div className={classes.shiftRight}>
        <form className={classes.form} noValidate onSubmit={APISubmit}>
          <Grid container spacing={10}>
            {/* Left part Sign Up */}
            <Grid item sm={6} xs={12}>
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <AccountBoxOutlinedIcon />
                </Avatar>
                <p className="studentSignUpHeadings">Personal details</p>
                {/* <form className={classes.form} noValidate> */}
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="name"
                      label="Full name"
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="education"
                      label="Education"
                      type="text"
                      helperText="Please provide the name of the institution where you studied"
                      id="education"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="subject"
                      label="Subject taught"
                      type="text"
                      helperText="Please provide the name of the subject you are teaching"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="rate"
                      label="$/hour"
                      type="number"
                      helperText="Please provide your tutoring rate to charge per hour"
                      id="rate"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      rows={4}
                      required
                      fullWidth
                      multiline
                      name="bio"
                      label="Bio"
                      type="text"
                      helperText="A brief background about yourself: your interests, passions, why you provide tutoring services, your experience and teaching style, etc. Provide any specific information, or limitations on your services, that prospective students should be aware of."
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}></Grid>
                </Grid>
              </div>
            </Grid>

            {/* Right side */}

            <Grid item sm={6} xs={12}>
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <HomeOutlinedIcon />
                </Avatar>
                <p className="studentSignUpHeadings">Contact details</p>

                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="province"
                      label="Province"
                      name="province"
                      autoComplete="province"
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="city"
                      label="City"
                      name="city"
                      autoComplete="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="address"
                      label="Address line"
                      name="address"
                      autoComplete="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="zip"
                      label="ZIP/Postal code"
                      name="zip"
                      autoComplete="zip"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}></Grid>
                </Grid>
              </div>
              <Box mt={5}>
                {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button> */}
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </div>
    </div>
  );
}
