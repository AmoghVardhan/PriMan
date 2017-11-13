var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prison'
});

module.exports.validate = function(req, res) {
  console.log(req.body);
  console.log(res);


  connection.query('SELECT * FROM dependants where Status="Pending"', function (error, result1, fields) {

    if(error) console.log(error);
    else {

      connection.query('SELECT * FROM lawyer where Status ="Pending"', function (error, result2, fields) {
        if(error) console.log(error);
        else {
          res.send({success: true, message: "correct" ,result1:result1,result2:result2})
        }
      });


    }
  });
  }


  module.exports.validate1 = function(req, res) {

    var info = {
      name:req.body.Name
    }
    console.log(req.body);
    connection.query('update  dependants set Status ="Approved" where Name =?', [info.name], function (error, result, fields) {
      console.log(result);
      if(error) {
        console.log(error);
        res.send({success: false, message: "incorrect"})
      }
      else {
        res.send({success: true, message: "correct"})
      }
    });
    }




    module.exports.validate2 = function(req, res) {
      console.log(req.body);
      console.log(res);
      var info = {
        name:req.body.Name
      }

      connection.query('update  dependants set Status ="Rejected" where Name =?', [info.name], function (error, result, fields) {

        if(error) console.log(error);
        else {
          res.send({success: true, message: "correct"})
        }
      });
      }


      module.exports.validate3 = function(req, res) {
        console.log(req.body);
        console.log(res);
        var info = {
          lid:req.body.Lid
        }

        connection.query('update  lawyer set Status ="Approved" where Lid =?', [info.lid], function (error, result, fields) {

          if(error) console.log(error);
          else {
            res.send({success: true, message: "correct"})
          }
        });
        }
      //
      //
      //
      //
        module.exports.validate4 = function(req, res) {
          console.log(req.body);
          console.log(res);
          var info = {
            lid:req.body.Lid
          }

          connection.query('update  lawyer set Status ="Rejected" where Lid =?', [info.lid], function (error, result, fields) {

            if(error) console.log(error);
            else {
              res.send({success: true, message: "correct"})
            }
          });
          }
