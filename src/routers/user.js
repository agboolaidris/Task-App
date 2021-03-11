const Router = require("express").Router();
const User = require("../models/user");
const { Register, Login } = require("../controllers/auth");

Router.post("/", Register);

Router.post("/login", Login);

module.exports = Router;
