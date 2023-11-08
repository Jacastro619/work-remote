const moment = require("moment");

module.exports = {
  post_tease: (str) => {
    const first25 = str.slice(0, 50);
    return first25;
  },

  format_date: () => {
    const formattedDate = moment().format("MMM Do YYYY");
    return formattedDate;
  },
};
