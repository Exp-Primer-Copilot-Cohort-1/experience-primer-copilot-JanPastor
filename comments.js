// Create web server application
var express = require('express');
var app = express();
var fs = require('fs');

// Create server
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   // Print server info
   console.log("App listening at http://%s:%s", host, port)
})

// Create GET request
app.get('/listComments', function (req, res) {
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

// Create POST request
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/addComment', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
       name:req.body.name,
       comment:req.body.comment,
   };
   console.log(response);
   res.end(JSON.stringify(response));
})