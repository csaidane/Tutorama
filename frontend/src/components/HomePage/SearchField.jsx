import React, { useState } from "react";
import "./SearchField.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";



import { makeStyles, Box, Button, TextField } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
}));



export default function SearchField(props) {
  const classes = useStyles();
  let history = useHistory();


  const [searchKeywords, setSearchKeywords] = useState("");

  const APISearch = function(event){
    event.preventDefault();
    let key = {key: searchKeywords}
    axios({ url: `/api/tutors/search?query=${key.key}`, method: "GET" }).then(
      (result) => {
        console.log(result.data)
        props.updateSearchResult(result.data.seach)
        //history.push("/searchresult");
      }
    );
  };






  return (
    <div id="searchField">
      <Box
        // className={classes.image}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <form onSubmit={APISearch}>
          <Box display="flex" justifyContent="center" alignItems="center">
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
                    value={searchKeywords}
                    onChange={(e) => setSearchKeywords(e.target.value)}
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
