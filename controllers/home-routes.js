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
    const dbPostData = await Post.findAll({
      include: [{ model: User, attributes: ["username", "email"] }],
    });

    let posts = dbPostData.map((post) => post.get({ plain: true }));
    if (!req.session.loggedIn) {
      posts = posts.slice(0, 6).reverse();
      res.render("jobs", { posts, loggedIn: req.session.loggedIn });
      return;
    }
    posts.reverse();
    // shows all the jobs if the user is logged in
    res.render("jobs", { posts, loggedIn: req.session.loggedIn });
    // res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/jobs/type/:name", withAuth, async (req, res) => {
  console.log(req.params);
  try {
    const dbJobTypeData = await Post.findAll({
      where: {
        job_type: req.params.name,
      },
    });

    const posts = dbJobTypeData.map((post) => post.get({ plain: true }));

    posts.reverse();

    res.render("jobs", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/jobs/:id", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["username", "email"] }],
    });

    const post = dbPostData.get({ plain: true });

    res.render("one-job", { post, loggedIn: req.session.loggedIn });
    // res.json(dbPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/jobs/user/posts", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{ model: User, attributes: ["username", "email"] }],
      where: {
        user_id: req.session.user_id,
      },
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    posts.reverse();

    res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post", withAuth, (req, res) => {
  res.render("post", { loggedIn: req.session.loggedIn });
});

router.post("/post", withAuth, async (req, res) => {
  try {
    const addPost = await Post.create({
      job_type: req.body.type,
      job_title: req.body.title,
      job_description: req.body.description,
      job_budget: req.body.budget,
      timestamp: `Created on ${format_date()}`,
      user_id: req.session.user_id,
    });

    res.status(200).json(addPost);
  } catch (err) {
    if (err.errors[0].path === "job_budget") {
      res.status(422).json(err);
    } else res.status(500).json(err);
  }
});

router.get("/edit/post/:id", withAuth, (req, res) => {
  res.render("edit", { loggedIn: req.session.loggedIn });
});

router.get("/about", (req, res) => {
  res.render("aboutme");
});

router.put("/edit/post/:id", withAuth, async (req, res) => {
  try {
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
  } catch (err) {
    if (err.errors[0].path === "job_budget") {
      res.status(422).json(err);
    } else res.status(500).json(err);
  }
});

router.delete("/delete/post/:id", withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.get("/login", areAuth, (req, res) => {
  res.render("login");
});

module.exports = router;
