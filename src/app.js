const { MongoClient, ObjectID } = require("mongodb");

// const _id = new ObjectID();
// console.log(_id);
// console.log(_id.getTimestamp());
// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "Task-App";

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("enable to connect to the database");
  }
  const db = client.db(dbName);
  console.log("connected successful");
  db.collection("user")
    .find({ name: "Afeez" })
    .toArray((error, res) => {
      if (error) return console.log("unable to connect to the database");
      console.log(res);
    });
  db.collection("user")
    .find({ name: "Afeez" })
    .count((error, res) => {
      if (error) return console.log("unable to connect to the database");
      console.log(res);
    });

  //   db.collection("user").findOne(
  //     { _id: new ObjectID("6049d874b494a90e749dad3c") },
  //     (error, result) => {
  //       if (error) return console.log("no such document in the database");
  //       console.log(result);
  //     }
  //   );

  //   db.collection("user").insertOne(
  //     {
  //       _id,
  //       name: "Idris",
  //       age: 12,
  //     },
  //     (error, result) => {
  //       if (error)
  //         return console.log("enable to insert document into the database");

  //       console.log(result.ops);
  //     }
  //   );

  //   db.collection("user").insertMany(
  //     [
  //       {
  //         name: "Hammed",
  //         age: 44,
  //       },
  //       {
  //         name: "Afeez",
  //         age: 34,
  //       },
  //     ],
  //     (error, client) => {
  //       if (error)
  //         return console.log("enable to insert document into the database");
  //       console.log(client.ops);
  //     }
  //   );
});
