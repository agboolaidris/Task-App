const express = require("express");
require("./db/mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

//setup bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setup route
app.use("/api/user", require("./routers/user"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
