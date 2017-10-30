var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.meetReqDoc = function(req, res) {
  console.log(req.body);
  console.log(res);
  var info = {
    pid:req.body.pid,
    name:req.body.name,
    medicalRecords:req.body.medicalRecords
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
  //
  //  if(err) {
  //    console.log(err);
  //    res.send({success: false});
  //  }
  //  else {
  //    res.send({success: true});
  //  }
  }
