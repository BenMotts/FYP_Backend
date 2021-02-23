var sql = require("mssql");

var config = {
  user: "sa",
  password: "Pa$$word2020BM",
  server: "localhost",
  database: "fyp_scm",
};

var runQuery = (query, res) => {
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var req = new sql.Request();

    req.query(query, function (err, recordset) {
      if (err) console.log(err);
      console.log(recordset.recordset);
      return recordset.recordset;
    });
  });
};

module.exports = runQuery;
