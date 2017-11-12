var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.meetReqFam = function(req, res) {
  console.log(req.body);
  console.log(res);
  var info = {
    name:req.body.name,
    reason:req.body.reason,
    pid:req.body.pid,
    pname:req.body.pname
  }

  connection.query('select Status from dependants where Name=?', [info.name], function(err,result){
   if(err) {
     console.log(err);
     res.send({success: false});
   }
   else {
     if(result.Status=="Approved"||result.Status=="Pending")
     {
       connection.query('update  dependants set Reason =? where Name =?', [info.reason,info.name], function(err,result){
        if(err) {
          console.log(err);
          res.send({success: false});
        }
        else {
          res.send({success: true});
        }
       });
     }
     else {
       console.log("sladjfkslafjj");
       res.send({stat:"Previous request still pending. Your new request is not accepted. Please wait for few more days"});
     }
   }
  });



  }
