import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar, Box, Typography, Fab } from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";

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
    width: theme.spacing(20),
    height: theme.spacing(20),
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

export default function TopLayerProfile(props) {
  const { name } = props.user.user;

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

        <Typography variant="h6"> {name}</Typography>
        {/* <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab> */}
      </Box>
    </div>
  );
}
