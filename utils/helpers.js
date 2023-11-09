const moment = require("moment");

module.exports = {
  post_tease: (str) => {
    if (str.length >= 50) {
      const first50 = str.slice(0, 50);
      return `${first50}....`;
    } else {
      return str;
    }
  },

  format_date: () => {
    const formattedDate = moment().format("MMM Do YYYY");
    return formattedDate;
  },
};
