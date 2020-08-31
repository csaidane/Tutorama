import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  box: {
    width: "40%",
    height: "40%",
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Bio" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Info" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Address" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Paper className={classes.box}>
          <Typography>
            Your BIO Page Onenfa,jbffad,mn
            adfm,ndfbfd,amnbad,dmnbfmanb,manba,mnbda,mfdnaba,mfdnab,mnab,mfnb
            Page Onenfa,jbffad,mn
            adfm,ndfbfd,amnbad,dmnbfmanb,manba,mnbda,mfdnaba,mfdnab,mnab,mfnb
            Page Onenfa,jbffad,mn
            adfm,ndfbfd,amnbad,dmnbfmanb,manba,mnbda,mfdnaba,mfdnab,mnab,mfnb
            Page Onenfa,jbffad,mn
            adfm,ndfbfd,amnbad,dmnbfmanb,manba,mnbda,mfdnaba,mfdnab,mnab,mfnb
            Page Onenfa,jbffad,mn
            adfm,ndfbfd,amnbad,dmnbfmanb,manba,mnbda,mfdnaba,mfdnab,mnab,mfnb
            Page Onenfa,jbffad,mn
            adfm,ndfbfd,amnbad,dmnbfmanb,manba,mnbda,mfdnaba,mfdnab,mnab,mfnb
            Page Onenfa,jbffad,mn
            adfm,ndfbfd,amnbad,dmnbfmanb,manba,mnbda,mfdnaba,mfdnab,mnab,mfnb
            Page Onenfa,jbffad,mn
            adfm,ndfbfd,amnbad,dmnbfmanb,manba,mnbda,mfdnaba,mfdnab,mnab,mfnb
          </Typography>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
    </div>
  );
}
