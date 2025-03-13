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
    let customername = req.body.customername;
    let districtid = req.body.districtid;
    let locationid = req.body.locationid;
    let customeremail = req.body.customeremail;
    let customercontact = req.body.customercontact;
    var regdate = new Date();
    let username = req.body.username;
    let password = req.body.password;
    let role = "customer";
    let status = "confirmed";

    // Check if the customer email already exists
    let strquery2 = "SELECT * FROM tbl_login WHERE username=?";
    con.query(strquery2, [username], (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Internal server error" });
        }
        if (rows.length > 0) {
            // If a customer with the same email already exists, send an alert message
            return res.status(200).json({ message: 'Email already exists' });
        } else {
            // Insert data into tbl_login table
            let strquery = "INSERT INTO tbl_login(username,password,role,status) VALUES(?,?,?,?)";
            con.query(strquery, [username, password, role, status], (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ message: "Internal server error" });
                }
                let loginid = result.insertId;

                // Insert data into tbl_customer table
                let strquery1 = "INSERT INTO tbl_customer(customername,districtid,locationid,customeremail,customercontact,regdate,loginid) VALUES(?,?,?,?,?,?,?)";
                con.query(strquery1, [customername, districtid, locationid, customeremail, customercontact, regdate, loginid], (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ message: "Internal server error" });
                    }

                    // Send success response after inserting into tbl_customer
                    res.status(200).json({ message: 'Success' });

                    // Send email to the customer
                    const mailOptions = {
                        from: 'thanusreeks1@gmail.com',
                        to: customeremail,
                        subject: "Dance Fit Rental",
                        html: 'Your Account is successfully registered'
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
                        if (err) console.log(err);
                        console.log(info);
                    });
                });
            });
        }
    });
});

module.exports = router; 
