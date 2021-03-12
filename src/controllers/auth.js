const User = require("../models/user");
const { generateToken } = require("../Utilis/token");
exports.Register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const save = new User({ email, username, password });
    const response = await save.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await generateToken(user._id);
    res.cookie("access-token", token, { httpOnly: true }).send(user);
  } catch (error) {
    res.status(401).json({ msg: error });
  }
};
