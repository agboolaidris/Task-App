const Router = require("express").Router();
const { getTasks, createTask } = require("../controllers/task");

Router.get("/", getTasks);
Router.post("/", createTask);

module.exports = Router;
