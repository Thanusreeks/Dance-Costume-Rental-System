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
    let shopid = req.body.shopid;
    let shopname = req.body.shopname;
    let districtid = req.body.districtid;
    let locationid = req.body.locationid;
    let shopcontact = req.body.shopcontact;
    let shopemail = req.body.shopemail;
    let licenseno = req.body.licenseno;
    let strquery =`UPDATE tbl_shop SET shopname='${shopname}',districtid='${districtid}',locationid='${locationid}',shopcontact='${shopcontact}',shopemail='${shopemail}',licenseno='${licenseno}' where shopid='${shopid}';`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
        if (err) throw err; 
        res.send({message:'Success'}) 
    }); 
    }) 
     
module.exports = router;