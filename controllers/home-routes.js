const router = require("express").Router();
const { User, Post } = require("../models");
const { withAuth, areAuth } = require("../utils/auth");
const { format_date } = require("../utils/helpers");

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

    let posts = dbPostData.map((post) => post.get({ plain: true }));
    if (!req.session.loggedIn) {
      posts = posts.slice(0, 6);
      res.render("jobs", { posts, loggedIn: req.session.loggedIn });
      return;
    }
    // shows all the jobs if the user is logged in
    res.render("jobs", { posts, loggedIn: req.session.loggedIn });
    // res.json(posts);
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

    // res.render("user-jobs", { posts, loggedIn: req.session.loggedIn });
    res.json(dbPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/post", withAuth, async (req, res) => {
  try {
    const addPost = await Post.create({
      job_type: req.body.job_type,
      job_title: req.body.job_title,
      job_description: req.body.job_description,
      job_budget: req.body.job_budget,
      timestamp: `Created on ${format_date()}`,
      user_id: req.session.user_id,
    });

    res.status(200).json(addPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/edit/post/:id", withAuth, async (req, res) => {
  try {
    const editPost = await Post.update(
      {
        job_type: req.body.job_type,
        job_title: req.body.job_title,
        job_description: req.body.job_description,
        job_budget: req.body.job_budget,
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
    res.status(500).json(err);
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
