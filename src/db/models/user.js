const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

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

schema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = bcrypt.compare(password, user.password);
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
