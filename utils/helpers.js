// This file exports helper functions that we can use throughout are app

const moment = require("moment");

module.exports = {
  // This helper will only show the first 50 characters of a job description on a job card
  post_tease: (str) => {
    if (str.length >= 50) {
      const first50 = str.slice(0, 50);
      return `${first50}....`;
    } else {
      return str;
    }
  },

  // This helper formats the date where needed
  format_date: () => {
    const formattedDate = moment().format("MMM Do YYYY");
    return formattedDate;
  },
};
