

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
   
let query = `SELECT * FROM tbl_costume c inner join tbl_category ca on c.categoryid=ca.categoryid  WHERE c.loginid = '${loginid}';`;
// INNER JOIN tbl_category ca ON c.categoryid = ca.categoryid
    console.log(query);
    con.query(query, (err, rows) => 
    {
    if (err) 
    throw err;
    res.send(rows);
    });
    });
    module.exports = router;