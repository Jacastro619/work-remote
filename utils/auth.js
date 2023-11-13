// This files we are creating custom middleware to use to check and see if users are logged in or not.

const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    next();
  }
};

const areAuth = (req, res, next) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  } else {
    next();
  }
};

module.exports = { withAuth, areAuth };
