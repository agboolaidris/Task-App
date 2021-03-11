const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://locahost/Task-App",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (error, res) => {
    if (error) return console.log("enable to connected to the database");
    console.log("database connected successful");
  }
);
