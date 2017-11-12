var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.assignW = function(req, res) {
  //console.log(req.body);
  //console.log(res);
  var info = {
    pid:req.body.pid,
    gid:req.body.gid,
    did:req.body.did,
    shift:req.body.shift,

  }
  if(info.pid!="undefined")
  {
    connection.query('update  prisoner set D_id =?,Shift=? where Pid =?', [info.did,info.Shift,info.pid], function(err,result){
     if(err) {
       console.log(err);
       res.send({success: false});
     }
     else {
       res.send({success: true});
     }
    });
  }
  if(info.gid!="undefined") {
    connection.query('update  guard set D_id =?,Shift=? where Gid =?', [info.did,info.Shift,info.gid], function(err,result){
     if(err) {
       console.log(err);
       res.send({success: false});
     }
     else {
       res.send({success: true});
     }
    });
  }


  }
