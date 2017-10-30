var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.meetReq = function(req, res) {
  console.log(req.body);
  console.log(res);
  var info = {
    name:req.body.name,
    reason:req.body.reason,
    pid:req.body.pid,
    pname:req.body.pname
  }
  // connection.query('INSERT INTO prisoner SET ?', info, function(err,result){
  //  if(err) {
  //    console.log(err);
  //    res.send({success: false});
  //  }
  //  else {
  //    res.send({success: true});
  //  }
  // });
  }
