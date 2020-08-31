const express = require('express');
const router  = express.Router();
let cookieSession = require('cookie-session');
router.use(cookieSession({name: 'session',
  keys: ['key1', 'key2']}));
const {addTutor, updateTutorBio} = require('./helper_functions');



module.exports = (db) => {


  router.post('/register', (req, res) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      street: req.body.street,
      city: req.body.city,
      province: req.body.province,
      post_code: req.body.post_code,
      profile_picture_url: req.body.profile_picture_url,
      education: education,
      bio: req.body.bio,
      rate_per_hour: req.body.rate_per_hour
    };
    addTutor(user)
    .then(user => {
      if (!user) {
        res.send({error: "error"});
        return;
      }
      req.session.user_id = user.id;
      req.session.user_name = user.name;
      let templateVars = {user: user, registration: "success"};
      res.json(templateVars);
    })
    .catch(e => res.send(e));
  });








  return router;
};
