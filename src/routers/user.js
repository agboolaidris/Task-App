const Router = require("express").Router();
const User = require("../db/models/user");

Router.post("/", async (req, res) => {
  const { email, username, password } = req.body;
  try {
    // const user = await User.findOne({ email });
    // if (user) return res.status(400).json({ msg: "email already exist" });

    const save = new User({ email, username, password });
    const response = await save.save();
    res.json(response);
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
