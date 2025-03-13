var express = require('express'); 
var router = express.Router(); 
var mysql=require('mysql'); 
var con=mysql.createConnection({ 
    host:"localhost", 
    user:"root", 
    password:"", 
    database:"db_dancefitrental" 
}) 
 
router.post('/', (req, res, next) => { 
    let customerid = req.body.id; 
    let query = `SELECT * FROM tbl_customer c inner join tbl_location l on l.locationid=c.locationid inner join tbl_district d on d.districtid=c.districtid where customerid ='${customerid}'; `;
    console.log(query); 
    con.query(query, (err, rows) => { 
    if (err) 
    throw err;
    res.send(rows); 
    }); 
    }); 
/* GET users listing. */ 
 
module.exports = router;