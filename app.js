const config = require("./conn/db.conn");
var sql = require("mssql");

const express = require("express");
const app = express();
const port = 5000;

app.get("/scpList", (req, res) => {
  runQuery("SELECT * FROM SCP", res);
});

app.listen(port, () => console.log("example application"));

runQuery = (query, res) => {
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var req = new sql.Request();

    req.query(query, function (err, data) {
      if (err) console.log(err);
      console.log(data.recordset);
      res.send(data.recordset);
    });
  });
};

module.exports = runQuery;
