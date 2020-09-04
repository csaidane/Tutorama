import React, { useState } from "react";
import "./SignUpPage.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./SignUpPage.scss";

import {
  Avatar,
  CssBaseline,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core/";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        tutorama
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "90%", // Fix IE 11 issue.
    marginTop: theme.spacing(7),
  },
  submit: {
    margin: theme.spacing(0, 0, 2),
  },
  image: {
    backgroundImage:
      // "url(https://github.com/katebatrakova/scheduler/blob/master/docs/background.png?raw=true)",
      "url(https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80)",
    // height: "690px",
    // marginLeft: "14%",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    // marginLeft: "5%",
    // marginTop: "4%",
    backgroundSize: "cover",
    position: "fixed",
    top: "0",
    left: "0",

    // marginTop: "4%",
  },
  shiftRight: {
    marginLeft: "10%",
  },
}));

export default function SignUpStudent(props) {
  const classes = useStyles();

  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");

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
    };
    axios({ url: "/api/users/register", data: user, method: "POST" }).then(
      (result) => {
        props.updateUser(result.data.user);
        history.push("/");
      }
    );
  };

  return (
    <Grid item lg={12} className={classes.image}>
      <div className={classes.shiftRight}>
        <form className={classes.form} noValidate onSubmit={APISubmit}>
          <Grid container spacing={10}>
            {/* Left part Sign Up */}
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <h3 className="studentSignUpHeadings">Student Sign up</h3>
                <Grid container spacing={5}>
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
                </Grid>

                {/* </form> */}
              </div>
            </Grid>

            {/* Right side */}

            <Grid item lg={6} md={12} sm={12} xs={12}>
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <HomeOutlinedIcon />
                </Avatar>
                <h3 className="studentSignUpHeadings">Contact details</h3>

                <Grid container spacing={2}>
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
    </Grid>
  );
}
