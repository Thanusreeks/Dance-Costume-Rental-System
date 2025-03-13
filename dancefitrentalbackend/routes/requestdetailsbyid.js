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
    let requestid = req.body.id; 
    let query = `SELECT * FROM tbl_request r INNER JOIN tbl_customer c ON r.loginid=c.loginid where r.requestid='${requestid}'; `;
    console.log(query); 
    con.query(query, (err, rows) => { 
    if (err) 
    throw err;
    res.send(rows); 
    }); 
    }); 
/* GET users listing. */ 
 
module.exports = router;