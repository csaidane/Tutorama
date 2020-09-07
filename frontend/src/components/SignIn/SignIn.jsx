import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import WrongEmailPassword from "./WrongEmailPassword";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
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
    // margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "400px", // Fix IE 11 issue.
    height: "400px", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  shiftRight: {
    // marginLeft: "",
    // margin: "auto",
  },
  image: {
    backgroundImage:
      // "url(https://github.com/katebatrakova/scheduler/blob/master/docs/background.png?raw=true)",
      "url(https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80)",
    height: "100vh",
    // width: "100%",
    backgroundPosition: "center",
    marginLeft: "10%",
    backgroundSize: "cover",
  },

  backForInputFields: {
    backgroundColor: "#f6f6f6",
    opacity: "0.8",
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const APILogin = function (event) {
    event.preventDefault();
    let login = { email, password };
    axios({ url: "/api/users/login", data: login, method: "POST" }).then(
      (result) => {
        props.updateTutor(result.data.user, result.data.tutor);
        history.push("/");
      }
    );
  };

  return (
    <div className={classes.image}>
      <div className={classes.shiftRight}>
        <Grid>
          <CssBaseline />
          <Grid item xs={12}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate onSubmit={APILogin}>
                <TextField
                  className={classes.backForInputFields}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  className={classes.backForInputFields}
                  variant="outlined"
                  margin="normal"
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    </div>
  );
}
