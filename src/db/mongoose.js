const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/Task-App",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, res) => {
    if (error) return console.log("enable to connected to the database");
    console.log("database connected successful");
  }
);
