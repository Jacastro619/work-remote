const router = require("express").Router();
const { User, Post } = require("../models");
const { withAuth, areAuth } = require("../utils/auth");
const sequelize = require("../config/connection");
const { Post, User } = require("../models");

// route to home page
router.get("/", async (req, res) => {
  res.render("homepage");
});

// route to go to job board
router.get("/jobs", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{ model: User, attributes: ["username", "email"] }],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));
// shows all the jobs if the user is logged in
    res.render("jobs", {posts, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.get("/login", areAuth, (req, res) => {
  res.render("login");
});

module.exports = router;
