var mysql = require('mysql');
var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_dancefitrental"
});

router.post('/', (req, res, next) => {
    let reqstatus = req.body.reqstatus;
    let requestid = req.body.requestid;
    let query1 = `SELECT customeremail FROM tbl_request r INNER JOIN tbl_customer c ON r.loginid=c.loginid WHERE r.requestid='${requestid}';`;

    con.query(query1, (err, rows) => {
        if (err) {
            throw err;
        }
        
        if (rows.length === 0) {
            // No rows returned, handle this case
            res.status(404).send({ message: 'Request not found' });
            return;
        }

        // Extract customeremail from the result rows
        let customeremail = rows[0].customeremail;

        let query2 = `UPDATE tbl_request SET reqstatus = 'Rejected' WHERE requestid = '${requestid}' ;`;
        console.log(query2);
        
        con.query(query2, (err, result) => {
            if (err) {
                throw err;
            }
            res.send({ message: 'Success' });

            const mailOptions = {
                from: `"SRM Tiles" <thanusreeks1@gmail.com>`,
                to: customeremail,
                subject: "Dance Fit Rental",
                html: `Your Request is Rejected`
            };

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: "thanusreeks1@gmail.com",
                    pass: "ghchtmnurkxuxoso"
                }
            });

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(info);
                }
            });
        });
    });
});

module.exports = router;
