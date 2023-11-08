const { Post } = require("../models");

const postData = [
  {
    job_type: "Web Design",
    job_title: "Designing a dance website",
    job_description:
      "I need a skilled web designer that can design a website for my dance studio",
    job_budget: 200,
    timestamp: "Created on Nov 8th 2023",
    user_id: 1,
  },
  {
    job_type: "Content Writing",
    job_title: "Need a Writer!",
    job_description: "I need a skilled Writer that can write great content",
    job_budget: 150,
    user_id: 4,
  },
  {
    job_type: "Web Design",
    job_title: "Designing a restaurant website",
    job_description:
      "I need a skilled web designer that can design a website for my restaurant",
    job_budget: 250,
    user_id: 2,
  },
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
