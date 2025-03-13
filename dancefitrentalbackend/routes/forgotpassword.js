var mysql = require('mysql');
const nodemailer = require("nodemailer");
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_dancefitrental"
});

router.post('/', (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.json({ message: 'Error', error: 'Username is required' });
    }
    const generatedPassword = generateRandomPassword(8); // Change 8 to the desired password length
    const updatePasswordQuery = `UPDATE tbl_login SET password ='${generatedPassword}' WHERE username = '${username}'`;
    con.query(updatePasswordQuery, (err, results) => {
        if (err) {
            console.error('Error updating password:', err);
            res.json({ message: 'Error', error: 'Internal server error' });
        } else {
            if (results.affectedRows > 0) {
                sendResetPasswordEmail(username, generatedPassword);
                res.json({ message: 'Success' });
            } else {
                res.json({ message: 'Error', error: 'Username not found' });
            }
        }
    });
});

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function sendResetPasswordEmail(email, generatedPassword) {
    const mailOptions = {
        from: `"Dance Fit Rental " <thanusreeks1@gmail.com>`,
        to: email,
        subject: "Password Reset",
        html: `Your new password is: ${generatedPassword}`
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
            console.error('Error sending email:', err);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = router;
