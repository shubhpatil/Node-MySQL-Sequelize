const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./user");

const College = sequelize.define("College", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

User.belongsTo(College);

module.exports = College;
