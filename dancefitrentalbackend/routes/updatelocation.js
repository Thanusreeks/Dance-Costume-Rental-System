var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection
    ({
        host: "localhost",
        user: "root",
        password: "",
        database: "db_dancefitrental"
    });

router.post('/', (req, res, next) => {
    let locationid = req.body.locationid;
    let locationname = req.body.locationname;
    let strquery = `UPDATE tbl_location SET locationname='${locationname}' where locationid='${locationid}';`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
        if (err) 
        throw err; 
        res.send({message:'Success'}) 
    }); 
    }) 
     
module.exports = router;