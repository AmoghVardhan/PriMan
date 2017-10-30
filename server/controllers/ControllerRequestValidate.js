var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.retrieve = function(req, res) {
  console.log(req.body)
  connection.query('SELECT * FROM prisoner', function (error, result, fields) {
    if(error) console.log(error);
    else {
      res.send({success: true, message: "correct" ,result:result})
    }
  });
}


// module.exports.signup = function(req, res) {
//
//   console.log(req.body);
//
//   connection.query('INSERT INTO login values (?,?,?) ',[req.body.username,req.body.password,0], function (error, result, fields) {
//     if(error)
//     {
//       console.log(error);
//       res.send({success: false, message: "INVALID USERNAME OR USERNAME ALREADY EXISTS"});
//     }
//     else {
//         res.send({success: true, message: "SUCCESSFULLY REGISTERED"});
//     }
//   });
// }
