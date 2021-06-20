const express = require("express");
const router = express.Router();
const randomstring = require("randomstring");
const College = require("../models/college");

// GET ALL DATA
router.get("/getAllData", async (req, res) => {
  let data = await College.findAll();
  res.json({
    data: data,
  });
});

// INSERT DATA
router.get("/addData", async (req, res) => {
  let collegeName = randomstring.generate();
  await College.create({
    name: collegeName,
  });
  res.send("College created");
});

module.exports = router;
