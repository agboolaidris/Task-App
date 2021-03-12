const jwt = require("jsonwebtoken");

const Auth = async (req, res, next) => {
  const cookie = req.cookies["access-token"];
  if (!cookie) return res.status(401).json({ msg: "authorization denied" });

  const compare = await jwt.verify(cookie, process.env.JWT_SECRET);
  if (!compare)
    return res
      .status(401)
      .json({ msg: "authorization denied, try to login again" });

  req.userID = compare.id;
  next();
};

module.exports = Auth;
