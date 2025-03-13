module.exports = router;
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_dancefitrental"
});
/* GET users listing. */
router.post('/', function (req, res, next) {
    let requestdate=new Date();
    let loginid = req.body.loginid;
    let costumeid=req.body.costumeid;
    let shopid = req.body.shopid;
    let fromdate=req.body.fromdate;
    let todate=req.body.todate;
    let reqstatus = "Requested";
   
    let count=req.body.count;
    let size=req.body.size;
    let totalamount=req.body.totalamount;
    
    let noofdays=req.body.noofdays;

    let strquery = `INSERT INTO tbl_request(requestdate,loginid,costumeid,shopid,fromdate,todate,reqstatus,count,size,totalamount,noofdays) VALUES(?,?,?,?,?,?,?,?,?,?,?)`;
    console.log(strquery);
    console.log(strquery, [requestdate,loginid,costumeid,shopid,fromdate,todate,reqstatus,count,size,totalamount,noofdays])
    con.query(strquery, [requestdate,loginid,costumeid,shopid,fromdate,todate,reqstatus,count,size,totalamount,noofdays], (err, result) => {
         console.log(strquery)
        if (err) throw err        
        res.send({ message: 'Success' })

    });
});
module.exports = router;