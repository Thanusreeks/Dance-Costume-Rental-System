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
    let locationid = req.body.locationid;
    let query = `DELETE  FROM tbl_location where locationid='${locationid}';`;
    
    con.query(query,(err,rows) => { 
        if (err) 
        throw err; 
        res.send({message:'Success'} 
        ); 
    }); 
         
        }); 
    
        module.exports = router;