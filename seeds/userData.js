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
  {
    username: "Thomas123",
    email: "test4@test.com",
    password: "password",
  },
  {
    username: "Haley123",
    email: "test4@test.com",
    password: "password",
  },
  {
    username: "Heidi123",
    email: "test4@test.com",
    password: "password",
  },
  {
    username: "Aubry123",
    email: "test4@test.com",
    password: "password",
  },
  {
    username: "Sheena123",
    email: "test4@test.com",
    password: "password",
  },
  {
    username: "Stephanie123",
    email: "test4@test.com",
    password: "password",
  },
  {
    username: "Justin123",
    email: "test4@test.com",
    password: "password",
  },
  {
    username: "Terry123",
    email: "test4@test.com",
    password: "password",
  },
  {
    username: "XiaoLi123",
    email: "test4@test.com",
    password: "password",
  },
  {
    username: "Martin123",
    email: "test4@test.com",
    password: "password",
  },
  {
    username: "MrWen123",
    email: "test4@test.com",
    password: "password",
  },
  {
    username: "Mark123",
    email: "test4@test.com",
    password: "password",
  },
  {
    username: "Barbarah123",
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
