var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.retrieve = function(req, res) {
  console.log(req.body.id)
  // alert(req.body.id);

  switch (req.body.id) {
    case '1':
          connection.query('SELECT * FROM prisoner', function (error, result, fields) {
            if(error) console.log(error);
            else {
              res.send({success: true, message: "correct" ,result:result})
            }
          });
      break;
   case '2':
   connection.query('SELECT * FROM department', function (error, result, fields) {
     if(error) console.log(error);
     else {
       res.send({success: true, message: "correct" ,result:result})
     }
   });
   break;
   case '3':
   connection.query('SELECT * FROM cases', function (error, result, fields) {
     if(error) console.log(error);
     else {
       res.send({success: true, message: "correct" ,result:result})
     }
   });
   break;
   case '4':
   connection.query('SELECT * FROM cell', function (error, result, fields) {
     if(error) console.log(error);
     else {
       res.send({success: true, message: "correct" ,result:result})
     }
   });
   break;
   case '5':
   connection.query('SELECT * FROM dependants', function (error, result, fields) {
     if(error) console.log(error);
     else {
       res.send({success: true, message: "correct" ,result:result})
     }
   });
   break;
   case '6':
   connection.query('SELECT * FROM lawyer', function (error, result, fields) {
     if(error) console.log(error);
     else {
       res.send({success: true, message: "correct" ,result:result})
     }
   });
   break;
   case '7':
   connection.query('SELECT * FROM guard', function (error, result, fields) {
     if(error) console.log(error);
     else {
       res.send({success: true, message: "correct" ,result:result})
     }
   });
   break;
  }

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
