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
    //medicalRecords:req.body.medicalRecords
  }
  connection.query('select medical_records from prisoner where (pid = ?)', info.pid, function(err,result){
   if(err) {
     console.log(err);
     res.send({success: false});
   }
   else {
     //res.send({success: true, message: "correct" ,result:result})
     res.send({success: true,result:result});
   }
  });
  //
  //  if(err) {
  //    console.log(err);
  //    res.send({success: false});
  //  }
  //  else {
  //    res.send({success: true});
  //  }
  }
