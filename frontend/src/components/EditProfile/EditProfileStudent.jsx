import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

  return (
    <div className={classes.shiftRight}>
      <TopLayerProfile user={props.user} />
      <Fab color="secondary" aria-label="edit" className={classes.spacingBtns}>
        <EditIcon />
      </Fab>

      <form className={classes.form}>
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
