const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const randomstring = require("randomstring");
const User = require("../models/user");
const College = require("../models/college");

// GET DATA
router.get("/getData", async (req, res) => {
  let data = await User.findOne({ where: { id: 3 } });
  res.json({
    data: data,
  });
});

// GET ALL DATA
router.get("/getAllData", async (req, res) => {
  let data = await User.findAll();
  res.json({
    data: data,
  });
});

// INSERT DATA
router.get("/addData", async (req, res) => {
  let username = randomstring.generate();
  // Random College ID Between 1 - 3
  let randomCollegeID = Math.floor(Math.random() * 3) + 1;
  await User.create({
    username: username,
    email: "dx@gmail.com",
    CollegeId: randomCollegeID,
  });
  res.send("User created");
});

// UPDATE DATA
router.get("/updateData", async (req, res) => {
  await User.update({ email: "bc@gmail.com" }, { where: { id: 1 } });
  res.send("User updated");
});

// DELETE DATA
router.get("/deleteData", async (req, res) => {
  await User.destroy({ where: { id: 2 } });
  res.send("User Deleted");
});

// TRUNCATE TABLE
router.get("/truncateData", async (req, res) => {
  await User.destroy({ truncate: true, cascade: false });
  res.send("User table truncated");
});

// DROP TABLE
router.get("/deleteTable", async (req, res) => {
  await User.drop();
  res.send("User table deleted");
});

// DROP ALL TABLES FROM DATABASE
router.get("/dropAllTables", async (req, res) => {
  await sequelize.drop();
  res.send("All Tables deleted");
});

// LEFT JOIN TABLE QUERY
router.get("/joinData", async (req, res) => {
  let data = await User.findAll({
    include: {
      model: College,
    },
  });
  res.json({
    data: data,
  });
});

// *** NORMAL SQL QUERY ***
router.get("/sql", async (req, res) => {
  let data = await sequelize.query(`
    SELECT Users.id, Users.username, Users.email, Users.date, Colleges.name
    FROM Users
    INNER JOIN Colleges
    ON Users.CollegeId = Colleges.id;
  `);
  res.json({
    data: data[0],
  });
});

module.exports = router;
