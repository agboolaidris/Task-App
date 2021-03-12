const Task = require("../models/task");

exports.getTasks = async (req, res) => {
  try {
    let main = {};
    let sort = {};

    if (req.query.complete) {
      main = { done: req.query.complete };
    }

    if (req.query.sortBy) {
      let part = req.query.sortBy.split(":");
      sort[part[0]] = part[1] === "desc" ? -1 : 1;
    }
    const user = await Task.find(main, null, {
      limit: parseInt(req.query.limit),
      skip: parseInt(req.query.skip),
      sort,
    });

    res.json(user);
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
