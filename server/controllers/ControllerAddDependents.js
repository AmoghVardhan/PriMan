var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.addDep = function(req, res) {
  console.log(req.body);
  console.log(res);
  var info = {
    name:req.body.name,
    p_id:req.body.pid,
    relation:req.body.relation,
    phNo:req.body.phoneNo,
    status:"invalid",
    super_id:2

  }
  connection.query('INSERT INTO dependants SET ?', info, function(err,result){
   if(err) {
     console.log(err);
     res.send({success: false});
   }
   else {
     res.send({success: true});
   }
  });
}
