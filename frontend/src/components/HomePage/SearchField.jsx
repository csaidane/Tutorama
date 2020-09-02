import React from "react";
import "./SearchField.scss";

import { makeStyles, Box, Button, TextField } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  image: {
    // backgroundImage:
    //   "url(https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=955&q=80)",
    // height: "400px",
    // backgroundSize: "cover",
    // boxShadow: "25px 25px 50px 50px white inset",
  },
  margin: {
    margin: theme.spacing(3),
  },
}));

export default function SearchField() {
  const classes = useStyles();
  return (
    <div id="searchField">
      <Box
        // className={classes.image}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <form action="">
          <Box display="flex" justifyContent="center" alignItems="center">
            {/* <input
              id="searchInput"
              type="text"
              placeholder="Search for a subject ..."
              name="search"
            /> */}
            {/* <SearchBar
              placeholder="Search for a subject..."
              // value={this.state.value}
              // onChange={(newValue) => this.setState({ value: newValue })}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
            /> */}
            <div style={{ width: 300 }}>
              <Autocomplete
                freeSolo
                id="subjectList"
                disableClearable
                options={subjectList.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search for a subject"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: "search" }}
                  />
                )}
              />
            </div>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.margin}
            >
              Search
            </Button>
          </Box>
        </form>
      </Box>
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
