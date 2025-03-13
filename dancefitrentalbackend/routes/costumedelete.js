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
    let costumeid = req.body.costumeid; 
    let query = `DELETE FROM tbl_costume WHERE costumeid='${costumeid}';`;
    console.log(query)
    con.query(query,(err,rows) => { 
        if (err) 
        throw err; 
        res.send({message:'Success'} 
        ); 
    }); 
         
        }); 
    
        module.exports = router;