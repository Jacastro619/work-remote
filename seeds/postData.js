const { Post } = require("../models");

const postData = [
  {
    job_type: "Web Development & Design",
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
    timestamp: "Created on Dec 2nd 2023",
    user_id: 4,
  },
  {
    job_type: "Web Development & Design",
    job_title: "Designing a restaurant website",
    job_description:
      "I need a skilled web designer that can design a website for my restaurant",
    job_budget: 250,
    timestamp: "Created on Nov 18th 2023",
    user_id: 2,
  },
  {
    job_type: "Graphic Design",
    job_title: "Logo design for a startup",
    job_description:
      "Looking for a talented graphic designer to create a unique logo for my startup",
    job_budget: 100,
    timestamp: "Created on Jan 9th 2022",
    user_id: 3,
  },
  {
    job_type: "Content Writing",
    job_title: "Write blog articles",
    job_description:
      "Looking for a content writer to create engaging blog posts",
    job_budget: 100,
    timestamp: "Created on Feb 8th 2021",
    user_id: 4,
  },
  {
    job_type: "Graphic Design",
    job_title: "Design a company logo",
    job_description: "Need a talented graphic designer to create a unique logo",
    job_budget: 150,
    timestamp: "Created on May 12th 2023",
    user_id: 1,
  },
  {
    job_type: "Web Development & Design",
    job_title: "Build an e-commerce website",
    job_description:
      "Seeking a web developer to create a responsive online store",
    job_budget: 300,
    timestamp: "Created on Jun 1st 2019",
    user_id: 3,
  },
  {
    job_type: "Digital Marketing",
    job_title: "Run a social media campaign",
    job_description:
      "Digital marketing expert needed for a social media advertising campaign",
    job_budget: 200,
    timestamp: "Created on Oct 22nd 2023",
    user_id: 14,
  },
  {
    job_type: "Social Media Marketing",
    job_title: "Manage social media accounts",
    job_description:
      "Hire a social media manager to handle your online presence",
    job_budget: 180,
    timestamp: "Created on Mar 4th 2018",
    user_id: 15,
  },
  {
    job_type: "Copywriting",
    job_title: "Create product descriptions",
    job_description:
      "Copywriter needed to write compelling product descriptions",
    job_budget: 120,
    timestamp: "Created on Nov 8th 2022",
    user_id: 16,
  },
  {
    job_type: "Virtual Assistance",
    job_title: "Administrative support",
    job_description: "Virtual assistant to help with administrative tasks",
    job_budget: 140,
    timestamp: "Created on Mar 29th 2021",
    user_id: 17,
  },
  {
    job_type: "E-Commerce & Dropshipping",
    job_title: "Set up an e-commerce store",
    job_description:
      "Assistance in setting up an e-commerce store for dropshipping",
    job_budget: 250,
    timestamp: "Created on Nov 8th 2004",
    user_id: 18,
  },
  {
    job_type: "Online Teaching and Tutoring",
    job_title: "Online math tutor",
    job_description: "Math tutor for online teaching sessions",
    job_budget: 90,
    timestamp: "Created on Jan 4th 2022",
    user_id: 19,
  },
  {
    job_type: "Data Entry and Analysis",
    job_title: "Data entry and analysis",
    job_description: "Data entry and analysis work for a research project",
    job_budget: 130,
    timestamp: "Created on Mar 17th 2021",
    user_id: 20,
  },
  // Additional entries to reach a total of 40
  {
    job_type: "Content Writing",
    job_title: "Write product reviews",
    job_description: "Content writer to write detailed product reviews",
    job_budget: 80,
    timestamp: "Created on Sep 21st 2023",
    user_id: 16,
  },
  {
    job_type: "Graphic Design",
    job_title: "Design a promotional poster",
    job_description:
      "Graphic designer to create an eye-catching promotional poster",
    job_budget: 90,
    timestamp: "Created on Oct 26th 2023",
    user_id: 14,
  },
  {
    job_type: "Web Development & Design",
    job_title: "Redesign an existing website",
    job_description: "Web developer needed to revamp an existing website",
    job_budget: 220,
    timestamp: "Created on Feb 14th 2023",
    user_id: 3,
  },
  {
    job_type: "Digital Marketing",
    job_title: "Run Google Ads campaign",
    job_description: "Digital marketing specialist for a Google Ads campaign",
    job_budget: 160,
    timestamp: "Created on Apr 23th 2023",
    user_id: 18,
  },
  {
    job_type: "Social Media Marketing",
    job_title: "Create Instagram content",
    job_description: "Social media marketer to design engaging Instagram posts",
    job_budget: 110,
    timestamp: "Created on May 23th 2023",
    user_id: 11,
  },
  {
    job_type: "Copywriting",
    job_title: "Write email newsletters",
    job_description: "Copywriter to craft persuasive email newsletters",
    job_budget: 70,
    timestamp: "Created on Jan 12th 2022",
    user_id: 6,
  },
  {
    job_type: "Virtual Assistance",
    job_title: "Manage calendar and appointments",
    job_description: "Virtual assistant to organize schedules and appointments",
    job_budget: 130,
    timestamp: "Created on Jul 18th 2023",
    user_id: 7,
  },
  {
    job_type: "E-Commerce & Dropshipping",
    job_title: "Product sourcing for e-commerce",
    job_description:
      "Assist in finding profitable products for an e-commerce business",
    job_budget: 180,
    timestamp: "Created on Aug 1st 2023",
    user_id: 8,
  },
  {
    job_type: "Online Teaching and Tutoring",
    job_title: "Teach Spanish online",
    job_description: "Online Spanish tutor for language lessons",
    job_budget: 120,
    timestamp: "Created on Jan 10th 2021",
    user_id: 1,
  },
  {
    job_type: "Data Entry and Analysis",
    job_title: "Data cleaning and analysis",
    job_description: "Data entry and cleaning for a research project",
    job_budget: 110,
    timestamp: "Created on Dec 11th 2022",
    user_id: 1,
  },
  // Continue adding more entries as needed
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
