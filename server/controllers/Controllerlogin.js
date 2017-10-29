var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.login = function(req, res) {
  console.log(req.body)
  connection.query('SELECT * FROM credentials WHERE (usr = ?)', [ req.body.username ], function (error, result, fields) {
    if(error) console.log(error);
    else if(!result.length) {
      res.send({success: false, message: "incorrect username"})
    }
    else {
      if(result[0].pass == req.body.password){
        var id = result[0].id;
        res.send({success: true, message: "correct" ,id:id})
      }
      else {
        res.send({success: false, message: "INVALID credentials!"});
      }
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
