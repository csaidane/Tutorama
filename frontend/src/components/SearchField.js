import React from "react";
import "./SearchField.scss";

import {
  Container,
  InputBase,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core/";
import { flexbox } from "@material-ui/system";
import { sizing } from "@material-ui/system";
import SearchBar from "material-ui-search-bar";
import { fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=955&q=80)",
    height: "400px",
    backgroundSize: "cover",
    boxShadow: "25px 25px 50px 50px white inset",
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
        className={classes.image}
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
            <SearchBar
              placeholder="Search for a subject..."
              // value={this.state.value}
              // onChange={(newValue) => this.setState({ value: newValue })}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
            />

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
