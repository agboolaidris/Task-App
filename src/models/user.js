const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const schema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, minlength: 8, trim: true },
  },
  { timestamps: true }
);

//getPublicProfile
schema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  delete user._id;
  return user;
};

//generateToken
schema.methods.generateToken = async function () {
  const token = await jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

//verified user
schema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("email or password doesn't exist");
  return user;
};

//hash password
schema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const User = model("User", schema);

module.exports = User;
