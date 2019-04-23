//Setting up MYSQL Server
let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "clam",
    password: "root",
    database: "burgers_db"
});

//Connection to MySQL server
connection.connect(function (err) {
    if (err) {
        console.log("error connectiong" + err.stack);
        return;
    } else {
    console.log("connected as id" + connection.threadId);
}
});

//export connection for orm
module.exports = connection;
