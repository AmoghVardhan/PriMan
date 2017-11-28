var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.assignW = function(req, res) {
  // console.log(req.body);
  // console.log(res);
  var info = {
    pid:req.body.pid,
    gid:req.body.gid,
    did:req.body.did,
    shift:req.body.shift

  }
  if(info.pid!=undefined)
  {
    // console.log(info.pid);
    // console.log(info.gid);
    // console.log(info.shift);
    connection.query('update  prisoner set D_id =?,Shift=? where Pid =?', [info.did,info.shift,info.pid], function(err,result){
     if(err) {
       console.log(err);
       res.send({success: false});
     }
     else {
       //res.send({success: true});
       connection.query('select * from prisoner where Pid=? ',[info.pid],function(err,result1){
         //console.log(result1);
         if(result1.length>0){
         if(  result1[0].D_id==info.did && result1[0].Shift==info.shift )
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
  else if(info.gid!=undefined) {
//else{
  //  console.log("gid");
  //  console.log(info.pid);
  //  console.log(info.gid);
  //  console.log(info.shift);
    connection.query('update  guard set D_id =?,Shift=? where Gid =?', [info.did,info.shift,info.gid], function(err,result){
     if(err) {
       console.log(err);
       res.send({success: false});
     }
     else {
       //res.send({success: true});
       connection.query('select * from guard where Gid=? ',[info.gid],function(err,result1){
         //console.log(result1);
         if(result1.length>0){
         if(  result1[0].D_id==info.did && result1[0].Shift==info.shift )
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
  else{
    console.log("error");
    res.send({success: false});
  }



  }
