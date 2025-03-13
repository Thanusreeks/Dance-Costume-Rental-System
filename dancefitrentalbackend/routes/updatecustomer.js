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
    let customerid = req.body.customerid;
    let customername = req.body.customername;
    let districtid = req.body.districtid;
    let locationid = req.body.locationid;
    let customercontact = req.body.customercontact;
    let customeremail = req.body.customeremail;
    let strquery =`UPDATE tbl_customer SET customername='${customername}',districtid='${districtid}',locationid='${locationid}',customercontact='${customercontact}',customeremail='${customeremail}' where customerid='${customerid}';`;
    console.log(strquery)
    
    con.query(strquery, (err, rows) => {
        if (err) throw err; 
        res.send({message:'Success'}) 
    }); 
    }) 
     
module.exports = router;