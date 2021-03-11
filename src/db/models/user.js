const { model, Schema } = require("mongoose");

const schema = new Schema({
  username: { type: String, required: true, trim: true, unique: true },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: { type: String, required: true, minlength: 8 },
});

const User = model("User", schema);

module.exports = User;
