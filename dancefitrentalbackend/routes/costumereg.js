var mysql = require('mysql'); 
var express = require('express'); 
var router = express.Router(); 
var con = mysql.createConnection({ 
host: "localhost", 
user: "root", 
password: "", 
database: "db_dancefitrental" 
}); 
/* GET users listing. */ 
router.post('/',(req,res,next)=>{    
let costumename = req.body.costumename;  
let categoryid = req.body.categoryid;
let costumedes = req.body.costumedes;   
let costumeimg= req.body.costumeimg; 
let price= req.body.price;
let stock= req.body.stock;

let loginid=req.body.loginid;
let query = `SELECT * FROM tbl_costume where costumename='${costumename}';`;   
console.log(query) ;
con.query(query, (err, rows) => {    
  if (err) 
      throw err;  
  if (rows == "") {   
      let strquery = `INSERT INTO tbl_costume(categoryid,costumename,costumedes,costumeimg,price,stock,loginid)VALUES(?,?,?,?,?,?,?);`;   
      con.query(strquery, [categoryid,costumename,costumedes,costumeimg,price,stock,loginid], (err, result) => {
          if (err)
              throw err;
          let loginid = result.insertId; // Corrected variable name to rows.insertId
          res.send({ message: 'Success' });
      });
  } else {  
      res.send({ message: 'Failed' });
  }   
});

  });
module.exports = router;