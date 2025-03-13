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
    let costumeid=req.body.costumeid;
    console.log(loginid)
   
let query = `SELECT * FROM tbl_costume  where loginid= '${loginid}' and costumeid='${costumeid}';`;

    console.log(query);
    con.query(query, (err, rows) => 
    {
    if (err) 
    throw err;
    res.send(rows);
    });
    });
    module.exports = router;