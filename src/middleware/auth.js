const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const cookie = req.cookies["access-token"];
  console.log(cookie);
  if (!cookie) return res.status(401).json({ msg: "authorization denied" });

  const compare = jwt.verify(cookie, process.env.JWT_SECRET);
  if (!compare)
    return res
      .status(401)
      .json({ msg: "authorization denied, try to login again" });

  req.userID = compare.id;
  next();
};

module.exports = Auth;
