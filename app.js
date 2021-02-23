const conn = require("./conn/db.conn");

const express = require("express");
const app = express();
const port = 5000;

app.get("/scpList", (req, res) => {
  res.send(conn("SELECT * FROM SCP"));
});

app.listen(port, () => console.log("example application"));
