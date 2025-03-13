var mysql = require('mysql'); 
var express = require('express'); 
var router = express.Router(); 
var con = mysql.createConnection({ 
host: "localhost", 
user: "root", 
password: "", 
database: "db_dancefitrental" 
}); 
 
router.get('/', (req, res, next) => { 
    let districtid = req.body.id; 
    let query = `SELECT * FROM tbl_location where districtid='${districtid}';`;

    con.query(query, (err, rows) =>  
    { 
    // if (err) throw err; 
    res.send(rows); 
    }); 
    }); 
    module.exports = router;