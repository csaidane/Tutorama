import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar, Box, Typography, Fab } from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(50),
    },
  },
  img: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.img}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        className={classes.large}
      />
    </div>
  );
}

export default function TopLayerProfile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Paper />
        <ImageAvatars />
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Typography> Student Name</Typography>
      </Box>
    </div>
  );
}
