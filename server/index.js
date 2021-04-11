// server/index.js

const path = require("path");
const express = require("express");
const mysql = require("mysql");

// Create connection to DB
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'CS3141',
    database: 'cs3141',
});

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
/*app.use(express.static(path.resolve(__dirname, '../client/build')));*/

// Handle GET requests to /api route
//app.get("/api", (req, res) => {
//  res.json({ message: "Hello from server!" });
//});

app.get("/api", (req, res) => {
    const sqlInsert = "insert into user_acc (email, pswd, date_created) values('anhromad@aol.edu', 'stuff', NOW());"
    db.query(sqlInsert, (err, result) => {
        res.json({ message: "Successfully inserted into database!" });
    })
});

// All other GET requests not handled before will return our React app
//app.get('*', (req, res) => {
//  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



