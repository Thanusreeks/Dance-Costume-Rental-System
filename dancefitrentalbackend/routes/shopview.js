var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const nodemailer = require("nodemailer");


var con = mysql.createConnection
({
host: "localhost",
user: "root",
password: "",
database: "db_dancefitrental"
});

router.get('/', (req, res, next) => {
    let query = `SELECT * FROM tbl_shop s INNER JOIN tbl_district d ON s.districtid=d.districtid INNER JOIN tbl_location l ON s.locationid=l.locationid INNER JOIN tbl_login lo ON lo.loginid=s.loginid WHERE lo.status='Not Confirmed';`;
    console.log(query);
    con.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
            return;
        }
        
        res.send(rows);

        // Loop through each row to get the email and send confirmation
        rows.forEach(row => {
            const shopemail = row.shopemail; // Assuming the email column name is 'shopemail'

            const mailOptions = {
                from: `thanusreeks1@gmail.com`,
                to: shopemail,
                subject: "Dance Fit Rental",
                html: `Your Account is Confirmed`
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
                    console.error(err);
                } else {
                    console.log(info);
                }
            });
        });
    });
});

    module.exports = router;