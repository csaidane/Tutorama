import React from "react";
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
}));

export default function EditProfileTutor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopLayerProfile />
      <Fab color="secondary" aria-label="edit">
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
              name="education"
              label="Education"
              type="text"
              helperText="Name of the institution where you studied"
              id="education"
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
              helperText="Name of the subject you are teaching"
              id="subject"
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
              helperText="Your tutoring rate to charge per hour"
              id="rate"
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
              className={classes.submit}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
