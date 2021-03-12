const Router = require("express").Router();
const Auth = require("../middleware/auth");
const { getTasks, createTask } = require("../controllers/task");

Router.get("/", [Auth], getTasks);
Router.post("/", createTask);

module.exports = Router;
