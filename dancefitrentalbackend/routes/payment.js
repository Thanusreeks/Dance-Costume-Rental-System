var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_dancefitrental"
});

/* POST payment completion */
router.post('/', function (req, res, next) {
    // Extract data from the request body
    let paymentdate = new Date();
    let loginid = req.body.loginid;
    let requestid = req.body.requestid;
    let paymentstatus = "Payment";
    let advance = req.body.advance;

    // Begin transaction
    con.beginTransaction(function (err) {
        if (err) { throw err; }

        // Update status in tbl_payment
        let paymentQuery = `INSERT INTO tbl_payment(paymentdate, paymentstatus, advance, requestid, loginid) VALUES (?, ?, ?, ?, ?);`;
        con.query(paymentQuery, [paymentdate, paymentstatus, advance, requestid, loginid], (err, paymentResult) => {
            if (err) {
                con.rollback(function () {
                    throw err;
                });
            }

            // Update costume stock
            let updateCostumeQuery = `UPDATE tbl_costume c
                                      INNER JOIN tbl_request r ON c.costumeid = r.costumeid 
                                      SET c.stock = c.stock - r.count
                                      WHERE r.requestid = '${requestid}';`;
            con.query(updateCostumeQuery, [requestid], (err, costumeResult) => {
                if (err) {
                    con.rollback(function () {
                        throw err;
                    });
                }

                // Update request status to 'Accepted'
                let updateRequestQuery = `UPDATE tbl_request SET reqstatus = 'Payment' WHERE requestid = '${requestid}';`;
                con.query(updateRequestQuery, [requestid], (err, requestResult) => {
                    if (err) {
                        con.rollback(function () {
                            throw err;
                        });
                    }

                    // Commit the transaction
                    con.commit(function (err) {
                        if (err) {
                            con.rollback(function () {
                                throw err;
                            });
                        }
                        console.log("Transaction completed successfully.");
                        res.send({ message: 'Success' });
                    });
                });
            });
        });
    });
});

module.exports = router;
