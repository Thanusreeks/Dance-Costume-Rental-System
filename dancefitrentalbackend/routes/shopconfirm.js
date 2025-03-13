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
    let status = req.body.status;
   
    let shopid = req.body.shopid;

    let strquery =`UPDATE tbl_login SET status = 'confirmed' WHERE loginid IN ( SELECT loginid FROM tbl_shop WHERE shopid = '${shopid}' );`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
        if (err) 
        throw err; 
        res.send({message:'Success'}) 
    }); 
    }) 
     
module.exports = router;