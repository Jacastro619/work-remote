// Importing required modules and models
const router = require("express").Router();
const { User, Post } = require("../models");
const { withAuth, areAuth } = require("../utils/auth");
const { format_date } = require("../utils/helpers");

// route to home page
router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

// route to go to job board
router.get("/jobs", async (req, res) => {
  try {
    // Here we retrieve all of the posts in the db and include username and email from the User model
    const dbPostData = await Post.findAll({
      include: [{ model: User, attributes: ["username", "email"] }],
    });

    // Here we go through each post data and convert it into plain json
    let posts = dbPostData.map((post) => post.get({ plain: true }));

    // If the user is not logged in we are only showing the first 6 that come back
    if (!req.session.loggedIn) {
      posts = posts.slice(0, 6).reverse();
      res.render("jobs", { posts, loggedIn: req.session.loggedIn });
      return;
    }
    posts.reverse();
    // shows all the jobs if the user is logged in
    res.render("jobs", { posts, loggedIn: req.session.loggedIn });
    // If error occurs return an error
  } catch (err) {
    res.status(500).json(err);
  }
});

// This is the endpoint for the filter when a specific job type is requested by filter
router.get("/jobs/type/:name", withAuth, async (req, res) => {
  try {
    // Here we find all the posts where the job type matches the job type requested by filter
    const dbJobTypeData = await Post.findAll({
      where: {
        job_type: req.params.name,
      },
    });

    // Here we go through each post data and convert it to plain json
    const posts = dbJobTypeData.map((post) => post.get({ plain: true }));

    posts.reverse();

    res.render("jobs", { posts, loggedIn: req.session.loggedIn });

    // Return an error if an error has occurred
  } catch (err) {
    res.status(500).json(err);
  }
});

// This is the endpoint to look at one job that the user selected from the jobs page
router.get("/jobs/:id", withAuth, async (req, res) => {
  try {
    // Here we are finding one job that has a matching id and including the username and email from the User model
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["username", "email"] }],
    });

    // Here we convert the post into plain json
    const post = dbPostData.get({ plain: true });

    res.render("one-job", { post, loggedIn: req.session.loggedIn });
    // Return an error if one occurrs
  } catch (err) {
    res.status(500).json(err);
  }
});

// This is the endpoint for the user to get the information and render in the dashboard
router.get("/jobs/user/posts", withAuth, async (req, res) => {
  try {
    // Here we are retrieving data and finding all posts where the user_id matches the user_id of a post in the db
    const dbPostData = await Post.findAll({
      include: [{ model: User, attributes: ["username", "email"] }],
      where: {
        user_id: req.session.user_id,
      },
    });

    // Here we are converting each post data into plain json
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    posts.reverse();

    res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
    // Returning an error if one occurrs
  } catch (err) {
    res.status(500).json(err);
  }
});

// This is the endpoint to render the post page
router.get("/post", withAuth, (req, res) => {
  res.render("post", { loggedIn: req.session.loggedIn });
});

// This is the endpoint for when a user wants to create a post
router.post("/post", withAuth, async (req, res) => {
  try {
    // Here we are creating a post using the Post model and passing in the data we want to use to create it
    const addPost = await Post.create({
      job_type: req.body.type,
      job_title: req.body.title,
      job_description: req.body.description,
      job_budget: req.body.budget,
      timestamp: `Created on ${format_date()}`,
      user_id: req.session.user_id,
    });

    res.status(200).json(addPost);
    // Returning an error if on occurrs
  } catch (err) {
    if (err.errors[0].path === "job_budget") {
      res.status(422).json(err);
    } else res.status(500).json(err);
  }
});

// This is the endpoint to render the page where the user will edit an existing post they own
router.get("/edit/post/:id", withAuth, (req, res) => {
  res.render("edit", { loggedIn: req.session.loggedIn });
});

// This endpoint will render the about page
router.get("/about", (req, res) => {
  res.render("aboutme", { loggedIn: req.session.loggedIn });
});

// This is the endpoint that will update an existing post
router.put("/edit/post/:id", withAuth, async (req, res) => {
  try {
    // Here we are updating an existing post use the Post model and passing in the data we want to update
    const editPost = await Post.update(
      {
        job_type: req.body.upType,
        job_title: req.body.upTitle,
        job_description: req.body.upDescription,
        job_budget: req.body.upBudget,
        timestamp: `Updated on ${format_date()}`,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(editPost);
    // Returning an error if one occurrs
  } catch (err) {
    if (err.errors[0].path === "job_budget") {
      res.status(422).json(err);
    } else res.status(500).json(err);
  }
});

// This is the endpoint for when the user wants to delete a post
router.delete("/delete/post/:id", withAuth, async (req, res) => {
  try {
    // Here is where we are deleting a post using the Post model where the id matched the id in the params of the request
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletePost);
    // Returning an error if one occurrs
  } catch (err) {
    res.status(500).json(err);
  }
});

// This is the endpoint to render the login page
router.get("/login", areAuth, (req, res) => {
  res.render("login");
});

module.exports = router;
