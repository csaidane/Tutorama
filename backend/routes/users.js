
const express = require('express');
const router  = express.Router();
let cookieSession = require('cookie-session');
router.use(cookieSession({name: 'session',
  keys: ['key1', 'key2']}));
const {addUser} = require('./helper_functions');
const {login} = require('./helper_functions');


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
    };
    addUser(user)
    .then(user => {
      if (!user) {
        res.send({error: "error"});
        return;
      }
      req.session.user_id = user.id;
      req.session.user_name = user.name;
      let outputVars = {user: user, registration: "success"};
      console.log(outputVars)
      res.json(outputVars);
    })
    .catch(e => res.send(e));
  });


  router.post('/login', (req, res) => {
    const {email, password} = req.body;
    login(email, password)
      .then(users => {
        //Fetches first because user comes in an array
        const user = users[0]
        if (!user) {
          res.send({error: "authentification error"});
          return;
        }
        req.session.user_id = user.id;
        req.session.user_name = user.name;
        let templateVars = {user: {name: user.name, id: user.id}};
        res.json(templateVars);
      })
      .catch(e => res.send(e));
  });


  router.post('/logout', (req, res) => {
    req.session = null;
    let templateVars = {user:null, logout: "success"}
    res.json(templateVars);

  });



  return router;
};
