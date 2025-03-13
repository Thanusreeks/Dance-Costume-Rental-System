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
    let query = ` 
    SELECT c.costumename, c.costumeid, COUNT(r.requestid) AS total_bookings FROM tbl_costume c LEFT JOIN tbl_request r ON r.costumeid = c.costumeid GROUP BY c.costumeid, c.costumename;`;
    console.log(query);
    con.query(query, (err, rows) => {
        if (err)
            throw err;
        res.send(rows);
    });
});
module.exports = router;