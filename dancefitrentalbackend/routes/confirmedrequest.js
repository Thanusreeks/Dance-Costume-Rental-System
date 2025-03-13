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
   let loginid = req.body.id;
   let query = `SELECT * FROM tbl_request r INNER JOIN tbl_costume c ON r.costumeid=c.costumeid INNER JOIN tbl_login l ON c.loginid=l.loginid   INNER JOIN tbl_customer cu ON r.loginid=cu.loginid where r.loginid='${loginid}' AND r.reqstatus='Accepted';`;
   console.log(query);
   con.query(query, (err, rows) => {
      // if (err) throw err;
      res.send(rows);
   });
});
module.exports = router;