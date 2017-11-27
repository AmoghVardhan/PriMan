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
  connection.query('update  dependants set Reason =?,Status="Pending" where Name =? and P_id=? and P_id IN (select Pid from prisoner where Name=?)'


  , [info.reason,info.name,info.pid,info.pname], function(err,result){
   if(err) {
     console.log(err);
     res.send({success: false});
   }
   else {
     //res.send({success: true});

     connection.query('select * from dependants where P_id=? and Name = ?',[info.pid,info.name],function(err,result1){
       //console.log(result1);
       if(result1.length>0){
       if(  result1[0].Status=='Pending' && result1[0].Reason==info.reason )
        {
          res.send({success: true});
        }
        else {
          res.send({success:false});
        }
      }
        else
        {
          res.send({success:false});
        }
     });

   }
  });
  }
