import React from "react";

import {
  Container,
  makeStyles,
  Box,
  Grid,
  Typography,
} from "@material-ui/core/";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import DoneOutlineOutlinedIcon from "@material-ui/icons/DoneOutlineOutlined";
import { flexbox } from "@material-ui/system";
import { sizing } from "@material-ui/system";
import { fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: "url()",
    height: "800px",
    backgroundSize: "cover",
    boxShadow: "25px 25px 50px 50px white inset",
  },

  avatar: {
    width: "50%",
    heigth: "50%",
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  headingBottomTopMargin: {
    marginBottom: "5%",
    marginTop: "10%",
  },
}));

export default function FindSubjects() {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        className={classes.headingBottomTopMargin}
        variant="h3"
        align="center"
        color="textPrimary"
      >
        What subject you need help with?
      </Typography>

      <Box
        className={classes.image}
        display="flex"
        justifyContent="flex-start"
        // alignItems="center"
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={3}>
            <div className="stepImage">
              <img
                className={classes.avatar}
                alt=""
                src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/geography.png?raw=true"
              ></img>
              <Typography variant="h4">Geography</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="stepImage">
              <img
                className={classes.avatar}
                alt=""
                src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/astronomy.png?raw=true"
              ></img>
              <Typography variant="h4">Astronomy</Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={3}>
            <div className="stepImage">
              <img
                className={classes.avatar}
                alt=""
                src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/geometry.png?raw=true"
              ></img>
              <Typography variant="h4">Geometry</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="stepImage">
              <img
                className={classes.avatar}
                alt=""
                src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/literature.png?raw=true"
              ></img>
              <Typography variant="h4">Literature</Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={3}>
            <div className="stepImage">
              <img
                className={classes.avatar}
                alt=""
                src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/math.png?raw=true"
              ></img>
              <Typography variant="h4">Math</Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={3}>
            <div className="stepImage">
              <img
                className={classes.avatar}
                alt=""
                src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/music.png?raw=true"
              ></img>
              <Typography variant="h4">Music</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="stepImage">
              <img
                className={classes.avatar}
                alt=""
                src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/photography.png?raw=true"
              ></img>
              <Typography variant="h4">Photography</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="stepImage">
              <img
                className={classes.avatar}
                alt=""
                src="https://github.com/csaidane/Tutorama/blob/feature/frontend/frontend/src/img/subject%20illustrations/socialStudies.png?raw=true"
              ></img>
              <Typography variant="h4">Social studies</Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
