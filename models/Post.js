const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    job_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 60],
      },
    },
    job_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0, 525],
      },
    },
    job_budget: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "post",
  }
);

module.exports = Post;
