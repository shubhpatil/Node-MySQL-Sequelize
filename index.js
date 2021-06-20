const express = require("express");
const app = express();
const sequelize = require("./sequelize");

// INDEX ROUTE
app.get("/", (req, res) => {
  res.send("Node MySQL Sequalize");
});

// ROUTES
app.use("/user", require("./routes/user"));
app.use("/college", require("./routes/college"));

// EXPRESS SERVER
sequelize.sync().then((req) => {
  app.listen(5000, () => console.log("server started at localhost 5000"));
});
