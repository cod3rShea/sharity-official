var mysql = require("mysql");

// if there is connection to heroku, connect, else connect locally
if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: "root",
        password: "root1234",
        database: "sharity"
    });
    
}

connection.connect(function (err) {
    if (err) {
        console.log("error connecting" + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

module.exports = connection;