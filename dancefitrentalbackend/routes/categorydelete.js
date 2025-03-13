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
    let categoryid = req.body.categoryid;
    let query = `DELETE  FROM tbl_category where categoryid='${categoryid}';`;
    
    con.query(query,(err,rows) => { 
        if (err) 
        throw err; 
        res.send({message:'Success'} 
        ); 
    }); 
         
        }); 
    
        module.exports = router;