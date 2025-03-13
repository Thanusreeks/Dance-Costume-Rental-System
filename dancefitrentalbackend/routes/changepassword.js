var mysql = require('mysql');
var express = require('express');
var path = require('path');
var router = express.Router();
const nodemailer = require("nodemailer");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_dancefitrental"
});

router.post('/', (req, res, next) => {
    const username = req.body.username;
    const password=req.body.password;
    const newpassword=req.body.newpassword1;
    const loginid=req.body.loginid;
    const Query =` SELECT * FROM tbl_login WHERE username='${username}' and password='${password}' and loginid='${loginid}'`;

    con.query(Query, (Err,Rows) => {
        if (Err) {
            console.error(Err);
            res.status(500).send({ message: 'Error checking username existence' });
            return;
        }

       else if (Rows.length === 0) {
            // console.log(Invalid username: ${username});
            res.send({ message: 'Invalid' });
            return;
        }

        else
        {   
            const Query =` UPDATE tbl_login  SET password='${newpassword}' WHERE loginid='${loginid}'`;
            
            con.query(Query, (Err,Rows) => {
                if (Err) {
                    console.error(Err);
                    res.status(500).send({ message: 'Error checking username existence' });
                    return;
                } 
                else{
                    res.send({ message: 'success' });
                    return;
                }
            });  
        }
    });
});



module.exports = router;