var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.assignW = function(req, res) {
  console.log(req.body);
  console.log(res);
  var type=req.body.type;
  var info = {
    pgid:req.body.pgid,
    did:req.body.did,
    shift:req.body.shift,

  }
  if(type=="Prisoner")
  {
      //connection.query('INSERT INTO dependants SET ?', info, function(err,result){
  }
  else {
      //connection.query('');
  }

   if(err) {
     console.log(err);
     res.send({success: false});
   }
   else {
     res.send({success: true});
   }
  }
