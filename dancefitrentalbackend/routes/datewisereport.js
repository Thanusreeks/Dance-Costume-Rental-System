var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"db_dancefitrental"
});
/* GET users listing. */
router.post('/', function(req, res, next) {
let startdate=req.body.startdate;
let enddate=req.body.enddate;
let query = `
SELECT s.shopname, COUNT(r.requestid) AS request_count 
FROM tbl_request r
INNER JOIN tbl_shop s ON s.shopid = r.shopid 
WHERE r.requestdate >= '${startdate}' AND r.requestdate <= '${enddate}' 
GROUP BY s.shopid;
`;

con.query(query, (err, rows) => {
  if (err) {
    throw err;
  }
  // Map the rows to include the proper property names
  const data = rows.map(row => ({
    shopname: row.shopname,
    request_count: row.request_count
  }));
  res.send(data);
});

});
module.exports = router;