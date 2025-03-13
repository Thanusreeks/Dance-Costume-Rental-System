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
    let shopid = req.body.id; 
    let query = `SELECT * FROM tbl_shop s inner join tbl_district d on d.districtid=s.districtid inner join tbl_location l on l.locationid=s.locationid where s.shopid ='${shopid}'; `;
    console.log(query); 
    con.query(query, (err, rows) => { 
    if (err) 
    throw err;
    res.send(rows); 
    }); 
    }); 
/* GET users listing. */ 
 
module.exports = router;