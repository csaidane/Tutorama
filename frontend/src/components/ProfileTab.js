import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs } from "@material-ui/core/";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  view: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(50),
    },
  },
}));

function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.view}>
      {/* <Paper elevation={0} /> */}
      <Paper />
      {/* <Paper elevation={0} /> */}
    </div>
  );
}

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Bio" />
          <Tab label="Info" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
      <SimplePaper />
    </Fragment>
  );
}
