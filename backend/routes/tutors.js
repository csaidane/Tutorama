const express = require("express");
const router = express.Router();
let cookieSession = require("cookie-session");
router.use(cookieSession({ name: "session", keys: ["key1", "key2"] }));
const {
  addTutor,
  searchTutors,
  addUser,
  addTutorSubject,
  addReview,
  getTutorWithId,
  getUserWithId,
  updateUser,
  updateTutor,
  getReviewsForTutor
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
    const search_keywords = req.query.query;
    searchTutors(search_keywords)
      .then((tutors) => {
        console.log("tutors", tutors);
        if (!tutors) {
          res.json("no tutors found for these keywords");
        } else {
          let templateVars = { search: tutors };
          res.json(templateVars);
        }
      })
      .catch((e) => res.send(e));
  });


  router.post("/reviews/add", (req, res) => {
    const review = {
      reviewer_id: req.body.reviewer_id,
      reviewed_id: req.body.reviewed_id,
      comment:req.body.comment,
      rating:req.body.rating
    };
    addReview(review)
      .then((review) => {
        if (!review) {
          res.send({ error: "review not added to the database" });
          return;
        }
        let outputVars = {review: review, review_sent: "success" };
        res.json(outputVars);
      })
      .catch((e) => res.send(e));
  });


  router.get('/profile/:id', (req,res) => {
    const tutor_id = req.params.id
    let outputVars = {};
    getUserWithId(tutor_id)
    .then((user)=>{
      if(!user){
        res.json("error: no user found")
        return;
      } else{
        outputVars['user_info'] = user
        return getTutorWithId(tutor_id);
      }
    })
    .then((tutor)=>{
      if(!tutor){
        res.json("error: no tutor found")
      } else{
        outputVars['tutor'] = tutor;
        return getReviewsForTutor(tutor_id)
      }
    })
    .then((reviews)=>{
      if(!reviews){
        res.json("error: no reviews found")
        return;
      } else{
        outputVars['reviews'] = reviews
        res.json(outputVars)
      }
    })
  });



  router.post("/profile/update", (req, res) => {
    const user = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      street: req.body.street,
      city: req.body.city,
      province: req.body.province,
      post_code: req.body.post_code,
      education: req.body.education,
      bio: req.body.bio,
      rate_per_hour:req.body.rate_per_hour
    }
    let outputVars = {}
    updateUser(user)
      .then((user) => {
        if (!user) {
          res.send({ error: "Could not update user" });
          return;
        }
        outputVars['user'] = user;
        outputVars['update_user'] = 'success'
        return updateTutor(user)
      })
      .then((tutor=>{
        if(!tutor){
          res.send({error:"Could not update tutor"})
          return;
        } else{
          outputVars['tutor'] = tutor;
          outputVars['update_tutor'] = 'success'
          res.json(outputVars);
        }
      }))
      .catch((e) => res.send(e));
  });


  return router;
};
