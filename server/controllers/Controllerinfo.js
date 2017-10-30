var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});


module.exports.feed = function(req,res) {
/*connection.query('SELECT ?? FROM records', [info], function(err,result){
  if(err) {
    console.log("Error fetching data:");
    console.log(err);
    res.end();
  }
  else {
    console.log("Records: ");
    console.log(result);
    res.send(result)
  }
});
*/
  res.send([{message: "Done."}]);
}

module.exports.addrecord = function(req, res) {
  console.log(req.body);
  console.log(res);
  var info = {
    
  }
  connection.query('INSERT INTO records SET ?', info, function(err,result){
   if(err) {
     console.log(err);
     res.send({success: false});
   }
   else {
     res.send({success: true});
   }
  });
}
