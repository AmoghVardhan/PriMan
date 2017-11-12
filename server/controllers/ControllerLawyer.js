var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.meetReqLaw = function(req, res) {
  console.log(req.body);
  console.log(res);
  var info = {
    lid:req.body.lid,
    name:req.body.name,
    reason:req.body.reason,
    pid:req.body.pid,
    pname:req.body.pname
  }
  connection.query('update  lawyer set Reason =? where Lid =?', [info.reason,info.lid], function(err,result){
   if(err) {
     console.log(err);
     res.send({success: false});
   }
   else {
     res.send({success: true});
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
