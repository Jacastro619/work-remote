const { Post } = require("../models");

const postData = [
  {
    job_type: "Web Design",
    job_title: "Designing a dance website",
    job_description:
      "I need a skilled web designer that can design a website for my dance studio",
    job_budget: 200,
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
  {
    job_type: "Graphic Design",
    job_title: "Logo design for a startup",
    job_description:
      "Looking for a talented graphic designer to create a unique logo for my startup",
    job_budget: 100,
    user_id: 3,
  },
  {
    job_type: "Programming",
    job_title: "Develop a mobile app",
    job_description:
      "In search of a skilled programmer to develop a mobile app for my business",
    job_budget: 500,
    user_id: 5,
  },
  {
    job_type: "Social Media Management",
    job_title: "Manage social media accounts",
    job_description:
      "Need a social media expert to handle and grow our company's social media presence",
    job_budget: 300,
    user_id: 6,
  },
  {
    job_type: "Photography",
    job_title: "Event photography",
    job_description:
      "Looking for a photographer to capture moments at our upcoming event",
    job_budget: 150,
    user_id: 7,
  },
  {
    job_type: "SEO Optimization",
    job_title: "Improve website SEO",
    job_description:
      "Seeking an SEO specialist to enhance the search engine optimization of our website",
    job_budget: 200,
    user_id: 8,
  },
  {
    job_type: "Video Editing",
    job_title: "Edit promotional video",
    job_description:
      "Editing a promotional video for our product launch. Need a video editor with creativity",
    job_budget: 180,
    user_id: 9,
  },
  {
    job_type: "Translation",
    job_title: "Translate a document",
    job_description:
      "Translation of a document from English to Spanish. Fluent bilingual translators needed",
    job_budget: 120,
    user_id: 10,
  },
  // Add more entries as needed
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
