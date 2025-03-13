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
    let districtId = req.body.id; // Assuming you receive district ID here
    let query = `SELECT * FROM tbl_location WHERE districtid = '${districtId}';`; // Adjusted query to select locations based on district ID
    console.log(query); 
    con.query(query, (err, rows) => { 
        if (err) 
            throw err;
        res.send(rows); 
    }); 
}); 

module.exports = router;
