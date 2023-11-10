// Importing neccessary npm packages and files
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();

// Configuring a port
const PORT = process.env.PORT || 3001;

// Configuring session object with cookies configured and other attributes
const sess = {
  secret: "Secretx3",
  cookie: { maxAge: 86400000 },
  resave: false,
  httpOnly: false,
  secure: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

// Configuring handlebars engine
// Setting middleware
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Using routers
app.use(routes);

// Setting the port to listen on while syncronizing
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening on http://localhost:${PORT}`)
  );
});
