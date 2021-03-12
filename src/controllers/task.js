const Task = require("../models/task");

exports.getTasks = async (req, res) => {
  try {
    res.json({ msg: "get task" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const userID = req.userID;
    const { description, done } = req.body;
    const task = new Task({
      description,
      done,
      userID,
    });
    const response = await task.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
