const express = require("express");
const router = express.Router();
let cookieSession = require("cookie-session");
router.use(cookieSession({ name: "session", keys: ["key1", "key2"] }));
const {
  addTutor,
  searchTutors,
  addUser,
  addTutorSubject,
} = require("./helper_functions");

module.exports = (db) => {
  router.post("/register", (req, res) => {
    let outputVars = {};
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      street: req.body.street,
      city: req.body.city,
      province: req.body.province,
      post_code: req.body.post_code,
      education: req.body.education,
      bio: req.body.bio,
      rate_per_hour: req.body.rate,
      subject: req.body.subject,
    };
    addUser(user)
      .then((returned_user) => {
        if (!returned_user) {
          res.send({ error: "error: user" });
          return;
        }
        outputVars["user"] = returned_user;
        user["id"] = returned_user.id;
        return addTutor(user);
      })
      .then((returned_tutor) => {
        if (!returned_tutor) {
          res.send({ error: "error: tutor" });
          return;
        }
        outputVars["tutor"] = returned_tutor;
        return addTutorSubject(user);
      })
      .then((subject) => {
        if (!subject) {
          res.send({ error: "error: subject" });
          return;
        } else {
          req.session.user_id = user.id;
          req.session.user_name = user.name;
          outputVars["registration"] = "success";
          res.json(outputVars);
        }
      })
      .catch((e) => {
        console.log("login error: ", e);
        res.status(500);
        res.send(e);
      });
  });

  router.get("/search", (req, res) => {
    searchTutors(req.query)
      .then((tutors) => {
        // console.log("tutors", tutors);
        if (!tutors) {
          res.json("no tutors found for these keywords");
        } else {
          let templateVars = { search: tutors };
          res.json(templateVars);
        }
      })
      .catch((e) => res.send(e));
  });

  return router;
};
