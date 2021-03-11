const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "Task-App";

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("enable to connect to the database");
  }
  client.db(dbName);
  console.log("connected successful");
});
