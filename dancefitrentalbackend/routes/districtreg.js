
module.exports = router; var
    express = require('express'); var
        router = express.Router(); var
            mysql = require('mysql'); var con =
                mysql.createConnection({
                    host:
                        "localhost", user: "root",
                    password: "",
                    database: "db_dancefitrental"
                });
/* GET users listing. */
router.post('/', function (req, res, next) {
    let districtname = req.body.districtname;
    let query = `SELECT * FROM tbl_district where districtname='${districtname}';`;
    console.log(query);
    con.query(query, (err, rows) => {
        if (err)
            throw err; 
        if (rows == "") 
        {
                let strquery = `INSERT INTO tbl_district (districtname) VALUES(?);`;
                console.log(strquery);
                con.query(strquery, [districtname])
                res.send({ message: 'Success' })
            } 
            else 
            {
                res.send({
                    message: 'Failed'
                })
        }
        // console.log("1 record inserted");
    });
});
module.exports = router;