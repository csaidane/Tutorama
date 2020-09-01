import React from "react";

import {
  Container,
  InputBase,
  makeStyles,
  Avatar,
  Box,
  Grid,
  spacing,
  Button,
  CardContent,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
} from "@material-ui/core/";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import DoneOutlineOutlinedIcon from "@material-ui/icons/DoneOutlineOutlined";
import { flexbox } from "@material-ui/system";
import { sizing } from "@material-ui/system";
import SearchBar from "material-ui-search-bar";
import { fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: "url()",
    height: "800px",
    backgroundSize: "cover",
    boxShadow: "25px 25px 50px 50px white inset",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function FindSubjects() {
  const classes = useStyles();
  return (
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
            <img src=""></img>
            <Typography variant="h4">Login or Sign Up </Typography>
            <Avatar className={classes.avatar}></Avatar>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
