var express = require('express');
var mysql = require('mysql');
var path = require('path');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var expressValidator = require('express-validator');
var app = express();
var morgan = require('morgan');
var Controllerlogin = require('./server/controllers/Controllerlogin');
var ControllerAddPrisoner = require('./server/controllers/ControllerAddPrisoner');



app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', express.static(__dirname + '/client/'));

// app.use(expressValidator ()); // Add this after the bodyParser middlewares!







app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/main.html');
});

app.post('/login', Controllerlogin.login);
app.post('/addRecord', ControllerAddPrisoner.addRecord);

// app.get('/checking',function(req,res){
//   var a = req.query.abcd;
//   connection.query("Insert into prisoner values(" + a + ",'ab','C1','ef','1947-04-23',4,'asdf',2,3,4,'kkjl','ioi')", function (error, results, fields)
//         {
//             if(error)
//               console.log(error);
//             console.log('inserted ' + results.affectedRows + ' rows');
//         });
// });

// app.post('/receive',function(req,res){
//
//
//         var name = "amogh";
//         console.log(req.body);
//         res.send('hello');
//
// });




app.get('/:ext',function(req,res){

   var dest = req.params.ext;
	 res.sendFile('./files/'+dest,{root: __dirname});
   // console.log(dest);
   if(dest=='addPrisoner.html')
    {
      console.log(req.query.pid);
      var post  = {id: 1};
    }

});

app.post('/hereiam',function(req,res){
  console.log(req.body);
  res.end();
});
app.listen(1337,function(){
	console.log('Listening to port 1337');
});


// app.get('/requestValidate.html'function(req,res){

// });







// connection.end();
