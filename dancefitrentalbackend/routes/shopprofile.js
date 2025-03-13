var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_dancefitrental"
});

router.post('/', (req, res, next) => {
    let loginid=req.body.id;
    console.log(loginid)
   
let query = `SELECT * FROM tbl_login lo INNER JOIN tbl_shop s on lo.loginid=s.loginid  INNER JOIN tbl_district d ON s.districtid = d.districtid INNER JOIN tbl_location l ON s.locationid = l.locationid  where lo.loginid='${loginid}';`;

    console.log(query);
    con.query(query, (err, rows) => 
    {
    if (err) 
    throw err;
    res.send(rows);
    });
    });
    module.exports = router;