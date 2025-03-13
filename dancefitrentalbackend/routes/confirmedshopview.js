var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_dancefitrental"
});

router.get('/', (req, res, next) => {
    let status = req.query.status; 
    let query =` SELECT * FROM tbl_login l inner join tbl_shop s on l.loginid=s.loginid inner join tbl_district d on s.districtid=d.districtid inner join tbl_location lo on s.locationid=lo.locationid where l.status="confirmed"`;
    console.log(query);
    con.query(query, (err, rows) => 
    {
    if (err) 
    throw err;
    res.send(rows);
    });
    });
    module.exports = router;