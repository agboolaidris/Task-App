const { model, Schema } = require("mongoose");
const schema = new Schema({
  description: { type: String, required: true },
  done: { type: Boolean, default: false },
  userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const task = model("Task", schema);

module.exports = task;
