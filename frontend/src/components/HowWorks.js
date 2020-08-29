import React from "react";
import "./SearchField.scss";

import {
  Container,
  InputBase,
  makeStyles,
  Box,
  Button,
  CardContent,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
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
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

export default function HowWorks() {
  const classes = useStyles();
  return (
    <div id="searchField">
      <Box
        className={classes.image}
        display="flex"
        justifyContent="flex-start"
        // alignItems="center"
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              src="./img/login.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <div>{/* <img src="./img/login.png"></img> */}</div>
    </div>
  );
}
