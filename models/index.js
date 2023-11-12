// Import all models that will be used
const User = require("./User");
const Post = require("./Post");

// creating relationships between two models
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

// exporting models
module.exports = { User, Post };
