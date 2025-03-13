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
    let costumeid = req.body.costumeid;
    let categoryid = req.body.categoryid;

    let costumename = req.body.costumename;
    let costumedes = req.body.costumedes;
    let costumeimg = req.body.costumeimg;
    let price = req.body.price;
    let stock = req.body.stock;

    let strquery = `UPDATE tbl_costume SET costumename='${costumename}',categoryid='${categoryid}',costumedes='${costumedes}',price='${price}',stock='${stock}',costumeimg='${costumeimg}' where costumeid='${costumeid}';`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
        if (err) throw err; 
        res.send({message:'Success'}) 
    }); 
    }) 
     
module.exports = router;