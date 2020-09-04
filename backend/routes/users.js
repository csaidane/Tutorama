const express = require("express");
const router = express.Router();
let cookieSession = require("cookie-session");
router.use(cookieSession({ name: "session", keys: ["key1", "key2"] }));
const { addUser, getTutorWithId, login, getMessageThreads, getMessagesBetweenUsers, addMessage,updateUser } = require("./helper_functions");

module.exports = (db) => {
  router.post("/register", (req, res) => {
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
      .then((user) => {
        if (!user) {
          res.send({ error: "error" });
          return;
        }
        req.session.user_id = user.id;
        req.session.user_name = user.name;
        let outputVars = { user: user, registration: "success" };
        res.json(outputVars);
      })
      .catch((e) => res.send(e));
  });

  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    let outputVars = {};
    login(email, password)
      .then((users) => {
        //Fetches first because user comes in an array
        const user = users[0];
        if (!user) {
          res.send({ error: "authentification error" });
          return;
        }
        req.session.user_id = user.id;
        req.session.user_name = user.name;
        outputVars["user"] = user;
        return getTutorWithId(user.id);
      })
      .then((tutors) => {
        if (!tutors) {
          outputVars["tutor"] = null;
          res.json(outputVars);
        } else {
          let tutor = tutors[0];
          outputVars["tutor"] = tutor;
          res.json(outputVars);
        }
      })
      .catch((e) => {
        console.log("login error: ", e);
        res.status(500);
        res.send(e);
      });
  });

  router.post("/logout", (req, res) => {
    req.session = null;
    let templateVars = { user: null, logout: "success" };
    res.json(templateVars);
  });


  router.get('/:id/messages/threads', (req,res) => {
    const user_id = req.params.id
    let outputVars = {};
    getMessageThreads(user_id)
    .then((threads)=>{
      if(!threads){
        res.json("no threads found")
      } else{
        outputVars['threads'] = threads;
        res.json(outputVars)
      }
    })
  });

  router.get('/:id/messages/:other', (req,res) => {
    const user_id = req.params.id
    const partner = req.params.other
    let outputVars = {};
    getMessagesBetweenUsers(user_id,partner)
    .then((messages)=> {
      if(!messages){
        res.json("no messages found !")
      } else{
        outputVars['messages'] = messages;
        res.json(outputVars)
      }
    })
  });


  router.post("/messages/add", (req, res) => {
    const message = {
      sender_id: req.body.sender_id,
      receiver_id:req.body.receiver_id,
      content: req.body.content
    };
    addMessage(message)
      .then((message) => {
        if (!message) {
          res.send({ error: "message not added to the database" });
          return;
        }
        let outputVars = {message: message, message_sent: "success" };
        res.json(outputVars);
      })
      .catch((e) => res.send(e));
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
      post_code: req.body.post_code
    }
    updateUser(user)
      .then((user) => {
        if (!user) {
          res.send({ error: "Could not update user" });
          return;
        }
        let outputVars = {user: user, user_update: "success" };
        res.json(outputVars);
      })
      .catch((e) => res.send(e));
  });




  return router;
};
