const Router = require("express").Router();
const User = require("../db/models/user");

Router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
Router.get("/", async (req, res) => {
  try {
    res.json({ user: "yyy" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = Router;
