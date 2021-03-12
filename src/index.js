const express = require("express");
const cookieParser = require("cookie-parser");
require("./db/mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

//setup bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setup cookieParser
app.use(cookieParser());

//setup route
app.use("/api/user", require("./routers/user"));
app.use("/api/task", require("./routers/task"));
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
