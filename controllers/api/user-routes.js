const router = require("express").Router();
const { User, Post } = require("../../models");

const serverError = { message: "Internal Server Error" };
const loginError = { message: "Invalid username or password" };
const loginSuccess = { message: "You are now logged in" };

router.post("/", async (req, res) => {
  try {
    const dbUserInfo = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserInfo.id;

      res.status(200).json(dbUserInfo);
    });
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

router.post("/login", async (req, res) => {
  try {
    const dbUserInfo = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserInfo) {
      res.status(404).json(serverError);
      return;
    }

    const correctPassword = await dbUserInfo.checkPassword(req.body.password);

    if (!correctPassword) {
      res.status(500).json(loginError);
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserInfo.id;

      res.status(200).json(loginSuccess);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
