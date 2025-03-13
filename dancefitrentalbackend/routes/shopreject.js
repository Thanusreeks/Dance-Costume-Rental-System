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
    let loginid = req.body.loginid;
    let query1 = `SELECT shopemail FROM tbl_shop s INNER JOIN tbl_login l ON l.loginid = s.loginid WHERE l.loginid = '${loginid}';`;

    con.query(query1, (err, rows) => {
        if (err) {
            throw err;
        }
        // Extract shopemail from the result rows
        let shopemail = rows[0].shopemail;

        let query2 = `UPDATE tbl_login SET status = 'Rejected' WHERE loginid = '${loginid}';`;
        console.log(query2);
        
        con.query(query2, (err, result) => {
            if (err) {
                throw err;
            }
            res.send({ message: 'Success' });

            const mailOptions = {
                from: ` <thanusreeks1@gmail.com>`,
                to: shopemail,
                subject: "Dance Fit Rental",
                html: `Your Account is Rejected`
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
