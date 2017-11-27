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
    //name:req.body.name,
    reason:req.body.reason,
    pid:req.body.pid,
    pname:req.body.pname
  }
  connection.query('update  lawyer set Reason =?,Status="Pending" where Lid =? and Lid IN (select L_id from prisoner where Pid=? and Name=?)'
  , [info.reason,info.lid,info.pid,info.pname], function(err,result){
   if(err) {
     console.log(err);
     res.send({success: false});
   }
   else {
     //res.send({success: true});
     connection.query('select * from lawyer where Lid=?',[info.lid],function(err,result1){
       //alert(result1);
       if(result1.length>0){
       if(result1[0].Status=='Pending' && result1[0].Reason==info.reason)
        {
          res.send({success: true});
        }
        else
        {
          res.send({success:false});
        }
      }
      else {
        res.send({success:false});
      }
     });
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
