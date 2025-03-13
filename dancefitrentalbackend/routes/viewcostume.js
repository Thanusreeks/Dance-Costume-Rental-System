var mysql = require('mysql'); 
var express = require('express'); 
var router = express.Router(); 
var con = mysql.createConnection({ 
host: "localhost", 
user: "root", 
password: "", 
database: "db_dancefitrental" 
}); 
 
router.post('/', (req, res, next) => { 
    let categoryid = req.body.id; 
    let query = `SELECT * FROM tbl_costume where categoryid='${categoryid}'`;
    console.log(query)
    con.query(query, (err, rows) =>  
    { 
    if (err) 
    throw err; 
    res.send(rows); 
    }); 
    }); 
    module.exports = router;