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
    let categoryid = req.body.categoryid;
    let categoryname = req.body.categoryname;
    let catdescription = req.body.catdescription;
    let catimage = req.body.catimage;

    let strquery =`UPDATE tbl_category SET categoryname='${categoryname}',catdescription='${catdescription}',catimage='${catimage}' where categoryid='${categoryid}';`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
        if (err) 
        throw err; 
        res.send({message:'Success'}) 
    }); 
    }) 
     
module.exports = router;