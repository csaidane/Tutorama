// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Separated Routes for each Resource
const usersRoutes = require("./routes/users");
const tutorRoutes = require("./routes/tutors")

// Mount all resource routes
app.use("/api/users", usersRoutes(db));
app.use("/api/tutors", tutorRoutes(db));



// Home page
app.get("/", (req, res) => {
  res.send("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
