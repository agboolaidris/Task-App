const { model } = require("mongoose");

const task = model("Task", {
  decription: { type: String, required: true },
  done: { type: Boolean, required: true },
});

module.exports = task;
