const jwt = require("jsonwebtoken");

exports.generateToken = async (id) => {
  const token = await jwt.sign({ id: id }, process.env.JWT_SECRET);
  return token;
};
