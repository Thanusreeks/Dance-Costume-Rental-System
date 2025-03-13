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
    let reqstatus = req.body.reqstatus;
   
    let requestid = req.body.requestid;

    let strquery =`UPDATE tbl_request SET reqstatus = 'Accepted' WHERE requestid = '${requestid}' ;`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
        if (err) 
        throw err; 
        res.send({message:'Success'}) 
    }); 
    }) 
     
module.exports = router;