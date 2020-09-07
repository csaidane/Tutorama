import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
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

export default function TopLayerProfile(props) {
  const { name, profile_picture_url } = props.user.user;

  function ImageAvatars() {
    const classes = useStyles();

    return (
      <div className={classes.img}>
        <Avatar
          alt="Remy Sharp"
          src={profile_picture_url}
          className={classes.large}
        />
      </div>
    );
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <ImageAvatars />
        <h1> {name}</h1>
      </Box>
    </div>
  );
}
