var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection
({
host: "localhost",
user: "root",
password: "",
database: "db_dancefitrental"
});

router.get('/', (req, res, next) => {
    let query =` SELECT c.categoryid, c.categoryname, COUNT(r.requestid) AS total_bookings FROM tbl_category c LEFT JOIN tbl_costume co ON c.categoryid = co.categoryid LEFT JOIN tbl_request r ON r.costumeid = co.costumeid GROUP BY c.categoryid, c.categoryname`;
    console.log(query);
    con.query(query, (err, rows) => 
    {
    if (err) throw err;
    res.send(rows);
    });
    });
    module.exports = router;