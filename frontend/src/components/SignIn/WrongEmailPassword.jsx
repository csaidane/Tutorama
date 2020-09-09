import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justify: "center",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  alert: {
    marginTop: "5%",
    width: "100%",
  },
}));

export default function DescriptionAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.alert}>
        <Alert severity="error" variant="filled">
          {/* <AlertTitle>Error</AlertTitle> */}
          Sorry, your <strong>email</strong> or <strong>password</strong> is
          incorrect.
        </Alert>
      </Paper>
    </div>
  );
}
