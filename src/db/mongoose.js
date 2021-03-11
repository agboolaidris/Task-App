const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/Task-App",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => {
    console.log("database connected successful");
  }
);
