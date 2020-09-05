import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";


import {
  Paper,
  Avatar,
  Box,
  Typography,
  Fab,
  Grid,
  Button,
  TextField,
  Container,
} from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";
import TopLayerProfile from "../ProfilePage/TopLayerProfile.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  shiftRight: {
    marginLeft: "15%",
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
  },
  form: {
    width: "60%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  spacingBtns: {
    margin: "3%",
  },
}));

export default function EditProfileStudent(props) {
  // const [value, setValue] = useState("");
  console.log("STUDENT", props);
  // const { name, email, province, city, post_code, street } = props.user.user;

  const classes = useStyles();
  let history = useHistory();


  const [name, setName] = useState(props.user.user.name);
  const [email, setEmail] = useState(props.user.user.email);
  const [password, setPassword] = useState(props.user.user.password);
  const [province, setProvince] = useState(props.user.user.province);
  const [city, setCity] = useState(props.user.user.city);
  const [address, setAddress] = useState(props.user.user.street);
  const [zip, setZip] = useState(props.user.user.post_code);

  const APISubmit = function (event) {
    event.preventDefault();
    let user = {
      id:props.user.user.id,
      name,
      email,
      password,
      street: address,
      city,
      province,
      post_code: zip,
    };
    axios({ url: "/api/users/profile/update", data: user, method: "POST" })
    .then(
      (result) => {
        props.updateUser(result.data.user);
        history.push("/");
      }
    );
  };

  return (
    <div className={classes.shiftRight}>
      <TopLayerProfile user={props.user} />
      <Fab color="secondary" aria-label="edit" className={classes.spacingBtns}>
        <EditIcon />
      </Fab>

      <form className={classes.form} onSubmit={APISubmit} >
        <Grid container spacing={2}>
          {/* //Full name */}
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

          {/* //password  */}
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

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
          <Grid container justify="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.spacingBtns}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
