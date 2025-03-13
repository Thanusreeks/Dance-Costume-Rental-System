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
let costumeid = req.body.costumeid;
let new_stock= req.body.new_stock;
let loginid=req.body.loginid;
console.log(loginid);
var date=new Date()
   
   let stock=req.body.stock;

   let updatedstock= (+stock) + (+new_stock);
   console.log(updatedstock);
   

let query = `UPDATE tbl_costume  SET  stock='${updatedstock}' WHERE costumeid='${costumeid}';`;
console.log(query)
con.query(query, (err,rows)=>{
 if(err) throw err;

         let strquery = `INSERT INTO tbl_stock(costumeid,new_stock,loginid,date)VALUES(?,?,?,?);`;   
         con.query(strquery, [costumeid,new_stock,loginid,date])          
res.send({ message: 'Success' })   
      } );       
})
  module.exports = router;