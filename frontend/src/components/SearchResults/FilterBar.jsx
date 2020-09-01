import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Grid,
  Paper,
  Button,
  InputLabel,
  FormControl,
  BootstrapInput,
  Select,
  TextField,
} from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { flexbox } from "@material-ui/system";

import useAutocomplete from "@material-ui/lab/useAutocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "7%",
    padding: theme.spacing(2),

    // textAlign: "center",
    color: theme.palette.text.primary,
  },
  form: {
    color: theme.palette.text.primary,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  search: {
    width: "30%",
  },
}));

export default function FilterBar() {
  const classes = useStyles();
  // sortby states
  const [conditionState, setConditionState] = React.useState({
    sortBy: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setConditionState({
      ...conditionState,
      [name]: event.target.value,
    });
  };

  // price range states
  const [rateState, setRateState] = React.useState({
    rate: "",
  });

  const handleRateChange = (event) => {
    const name = event.target.name;
    setRateState({
      ...conditionState,
      [name]: event.target.value,
    });
  };

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <FormControl className={classes.form}>
          {/* Choosing a subject  */}
          <div style={{ width: 200 }}>
            <Autocomplete
              freeSolo
              id="subjectList"
              disableClearable
              options={subjectList.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Subject"
                  margin="normal"
                  variant="outlined"
                  InputProps={{ ...params.InputProps, type: "search" }}
                />
              )}
            />
          </div>
          {/* Sort by  */}

          <FormControl variant="standard" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Sort by
            </InputLabel>
            <Select
              native
              value={conditionState.sortBy}
              onChange={handleChange}
              // label="Sort By"
              inputProps={{
                name: "sortBy",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Price: lowest to highest</option>
              <option value={20}>Price: highest to lowest</option>
              <option value={30}>Reviews</option>
              <option value={40}>Rating</option>
            </Select>
          </FormControl>

          {/* Price range */}
          <FormControl variant="standard" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Hourly rate
            </InputLabel>
            <Select
              native
              value={rateState.rate}
              onChange={handleRateChange}
              // label="Sort By"
              inputProps={{
                name: "rate",
              }}
            >
              <option aria-label="None" value="" />
              <option value={1}>$10-$20</option>
              <option value={2}>$20-$30</option>
              <option value={3}>$30-$40</option>
              <option value={4}>$40-$50</option>
              <option value={5}>$50-$60</option>
              <option value={6}>$60-$70</option>
              <option value={7}>$70-$80</option>
            </Select>
          </FormControl>

          {/* City selector  */}
          <Autocomplete
            variant="standard"
            id="selectCity"
            style={{ width: 300 }}
            options={cities}
            classes={{
              option: classes.option,
            }}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (
              <React.Fragment>{option.label}</React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a city"
                // variant="outlined"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />

          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.margin}
          >
            Search
          </Button>
        </FormControl>
      </Paper>
    </Grid>
  );
}

const cities = [
  { label: "Gatineau" },
  { label: "Laval" },
  { label: "Montreal" },
  { label: "Quebec City" },
  { label: "Ottawa - Gatineau" },
  { label: "Sherbrooke" },
  { label: "Trois-Rivières" },
  { label: "Chicoutimi - Jonquière" },
  { label: "Saint-Jean-sur-Richelieu" },
  { label: "Châteauguay" },
  { label: "Drummondville" },
  { label: "Saint-Jérôme" },
];

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
