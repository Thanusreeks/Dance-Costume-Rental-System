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
    let costumeid = req.body.id; 
    let query = `SELECT * FROM tbl_costume c INNER JOIN tbl_shop s ON c.loginid=s.loginid INNER JOIN tbl_district d ON d.districtid=s.districtid INNER JOIN tbl_location l ON l.locationid=s.locationid where c.costumeid='${costumeid}'`;
    console.log(query)
    con.query(query, (err, rows) =>  
    { 
    if (err) 
    throw err; 
    res.send(rows); 
    }); 
    }); 
    module.exports = router;