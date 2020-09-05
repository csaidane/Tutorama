import React, { useState } from "react";
import "./SearchField.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { makeStyles, Box, Button, TextField, Grid } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
  marginTop: {
    marginTop: "5%",
  },
}));

export default function SearchField(props) {
  const classes = useStyles();
  let history = useHistory();

  const [searchKeywords, setSearchKeywords] = useState("");

  const APISearch = function (event) {
    event.preventDefault();
    let key = { key: searchKeywords };
    axios({ url: `/api/tutors/search?query=${key.key}`, method: "GET" })
      .then((result) => {
        props.updateSearchResult(result.data.search);
      })
      .then(() => history.push("/searchresult"));
  };

  return (
    <div id="searchField">
      <Grid
        container
        direction="row"
        justify="space-between"
        // alignItems="center"
      >
        <Grid xs={6} className={classes.marginTop}>
          <h1 id="heading">Let's start learning today! </h1>
          <form onSubmit={APISearch}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <div style={{ width: 300 }}>
                <Autocomplete
                  freeSolo
                  onChange={(e, option) => {
                    setSearchKeywords(option);
                  }}
                  id="subjectList"
                  disableClearable
                  options={subjectList.map((option, index) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search for a subject"
                      margin="normal"
                      variant="outlined"
                      InputProps={{ ...params.InputProps, type: "search" }}
                      value={searchKeywords}
                      onChange={(e, option) => {
                        setSearchKeywords(e.target.value);
                      }}
                    />
                  )}
                />
              </div>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                type="submit"
                className={classes.margin}
              >
                Search
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid xs={6} className={classes.marginTop}>
          {" "}
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://github.com/katebatrakova/scheduler/blob/master/docs/girl2.jpg?raw=true"
          ></img>
        </Grid>
      </Grid>
    </div>
  );
}

const subjectList = [
  { title: "Algebra" },
  { title: "Accounting" },
  { title: "Art" },
  { title: "Astronomy" },
  { title: "Biology" },
  { title: "Botany" },
  { title: "Calculus" },
  { title: "Chemistry" },
  { title: "Creative Writing" },
  { title: "Design" },
  { title: "Drawing" },
  { title: "Economics" },
  { title: "English" },
  { title: "Ethics" },
  { title: "French" },
  { title: "Geography" },
  { title: "Geometry" },
  { title: "German" },
  { title: "History" },
  { title: "Humanities" },
  { title: "Italian" },
  { title: "Japanese" },
  { title: "Latin" },
  { title: "Law" },
  { title: "Literature" },
  { title: "Math" },
  { title: "Nutrition" },
  { title: "Painting" },
  { title: "Philosophy" },
  { title: "Physics" },
  { title: "Poetry" },
  { title: "Polish" },
  { title: "Psychology" },
  { title: "Science" },
  { title: "Social Studies" },
  { title: "Sociology" },
  { title: "Spanish" },
  { title: "Statistics" },
  { title: "Social Sciences" },
  { title: "Trigonometry" },
  { title: "Web Designing" },
];
