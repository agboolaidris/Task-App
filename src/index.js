const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/user", (req, res) => {
  res.json({ msg: "hello world!!!" });
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
