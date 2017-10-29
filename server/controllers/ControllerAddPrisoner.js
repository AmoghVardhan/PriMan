var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.addRecord = function(req, res) {
  console.log(req.body);
  console.log(res);
  var info = {
    Pid:req.body.id,
    Name:req.body.pname,
    Crime:req.body.crime,
    Address:req.body.address,
    doj:req.body.doj,
    d_id:req.body.did,
    shift:req.body.shift,
    c_id:req.body.cid,
    cell_id:req.body.cellid,
    L_id:req.body.lid,
    remarks:req.body.remarks,
    medical_Records:req.body.medicalRecords
  }
  connection.query('INSERT INTO prisoner SET ?', info, function(err,result){
   if(err) {
     console.log(err);
     res.send({success: false});
   }
   else {
     res.send({success: true});
   }
  });
}
