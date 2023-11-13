// Importing required modules and models
const router = require("express").Router();
const { User, Post } = require("../../models");

// Creating custom errors
const serverError = { message: "Internal Server Error" };
const loginError = { message: "Invalid username or password" };
const loginSuccess = { message: "You are now logged in" };

// This is the endpoint to create an account and sign up
router.post("/", async (req, res) => {
  try {
    // Here we are creating a new user using the User model
    const dbUserInfo = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Here we are saving the loggedIn key and the user_id key into the cookie
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserInfo.id;

      res.status(200).json(dbUserInfo);
    });
    // If there is an error this sends back what error occurred
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(422).json({ message: "Username is already in use" });
    } else if (err.name === "SequelizeValidationError") {
      res.status(400).json(err);
    } else if (err.errors[0].path === "email") {
      res.status(401).json(err);
    } else {
      console.log(err);
      res.status(500).json(serverError);
    }
  }
});

// This is the endpoint for when the user wants to log in
router.post("/login", async (req, res) => {
  try {
    // Here we are checking to see if the username the user typed exists in the database
    const dbUserInfo = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    // If it does not exists then we are returning an error
    if (!dbUserInfo) {
      res.status(404).json(serverError);
      return;
    }

    // If username exists the we check to see if the password that was given is the correct password for the username
    const correctPassword = await dbUserInfo.checkPassword(req.body.password);

    // If the password is incorrect then we send back an error
    if (!correctPassword) {
      res.status(404).json(loginError);
      return;
    }

    // If both the username and password are correct then we are saving the loggedIn key and the user_id key into the cookie
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserInfo.id;

      res.status(200).json(loginSuccess);
    });
    // This will catch all other errors
  } catch (err) {
    res.status(500).json(err);
  }
});

// This is the endpoint for when a user wants to logout of their current session
router.post("/logout", (req, res) => {
  // If the loggedIn key exists within the cookie, then we are destroying that cookie and ending that session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
});

// This is the endpoint to get db information for a specific post
router.get("/post/:id", async (req, res) => {
  try {
    // Here we are trying to find a post in the db by its primary key
    const post = await Post.findByPk(req.params.id);

    res.status(200).json(post);
    // If an error occurrs then we return an error
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
