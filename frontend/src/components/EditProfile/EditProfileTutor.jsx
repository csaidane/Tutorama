import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Grid, Button, TextField, Container } from "@material-ui/core/";
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
    marginBottom: "1%",
  },
}));

export default function EditProfileTutor(props) {
  console.log("TUTOR", props);
  const classes = useStyles();

  const [name, setName] = useState(props.user.user.name);
  const [email, setEmail] = useState(props.user.user.email);
  const [password, setPassword] = useState(props.user.user.password);
  const [province, setProvince] = useState(props.user.user.province);
  const [city, setCity] = useState(props.user.user.city);
  const [address, setAddress] = useState(props.user.user.street);
  const [zip, setZip] = useState(props.user.user.post_code);
  const [education, setEducation] = useState(props.user.tutor.education);
  const [bio, setBio] = useState(props.user.tutor.bio);
  const [rate, setRate] = useState(props.user.tutor.rate_per_hour);
  const [subject, setSubject] = useState(props.user.tutor.name);

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
              name="education"
              label="Education"
              type="text"
              helperText="Name of the institution where you studied"
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
              helperText="Name of the subject you are teaching"
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
              helperText="Your tutoring rate to charge per hour"
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
