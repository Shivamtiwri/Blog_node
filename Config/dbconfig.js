const mysql = require("mysql");

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "db_blog",
  //   port: 3308,
});

function connectionDb() {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
}

module.exports = {
  connectionDb,
  con,
  query: con.query.bind(con), // Bind query method to connection
};
