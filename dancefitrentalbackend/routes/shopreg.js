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
    let shopname = req.body.shopname;
    let districtid = req.body.districtid;
    let locationid = req.body.locationid;
    let shopemail = req.body.shopemail;
    let shopcontact = req.body.shopcontact;
    let licenseno = req.body.licenseno;

    var regdate = new Date();
    let username = req.body.username;
    let password = req.body.password;
    let role = "shop";
    let status = "Not Confirmed";

    // Check if email already exists in tbl_shop
    let strquery2 = "SELECT * FROM tbl_login WHERE username = ?";
    con.query(strquery2, [username], (err, rows) => {
        if (err) {
                return res.status(500).json({ message: 'Internal Server Error' });
            
        } 
        if (rows.length > 0) {
            // Email already exists, send alert box response
            return  res.status(200).json({ message: 'Email already exists' });
            
        }
        // Email doesn't exist, proceed with registration
        let insertLoginQuery = "INSERT INTO tbl_login(username,password,role,status) VALUES(?,?,?,?)";
        con.query(insertLoginQuery, [username, password, role, status], (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Internal Server Error' });
                return;
            }
            let loginid = result.insertId;
            let insertShopQuery = "INSERT INTO tbl_shop(shopname,districtid,locationid,shopemail,licenseno,shopcontact,shopregdate,loginid) VALUES(?,?,?,?,?,?,?,?)";
            con.query(insertShopQuery, [shopname, districtid, locationid, shopemail, licenseno, shopcontact, regdate, loginid], (err, result) => {
                if (err) {
                    res.status(500).send({ message: 'Internal Server Error' });
                    return;
                }
                res.status(200).send({ message: 'Success' });
            });
        });
    });
});

module.exports = router;
