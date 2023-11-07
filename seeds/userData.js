const { User } = require("../models");

const userData = [
  {
    username: "Steve123",
    email: "test1@test.com",
    password: "password",
  },
  {
    username: "Jorge123",
    email: "test2@test.com",
    password: "password",
  },
  {
    username: "Nhi123",
    email: "test3@test.com",
    password: "password",
  },
  {
    username: "Jerome123",
    email: "test4@test.com",
    password: "password",
  },
];

const seedUsers = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedUsers;
