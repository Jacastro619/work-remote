// This file imports all neccessary seed files and uses all the function from each to seed the database with test data

const sequelize = require("../config/connection");
const seedUsers = require("./userData");
const seedPosts = require("./postData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  process.exit(0);
};

seedAll();
