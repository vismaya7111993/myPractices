/**
 * Created by viwil1 on 10/5/2016.
 */
var http = require('http');
var connect = require('connect');
var bodyParser = require('body-parser');

var app = connect()
    .use(bodyParser.urlencoded({extended: true}))
// function to handle http request
    .use(function(req,res){
        var parseInfo ={};
        parseInfo.fname = req.body.userFirstName;
        parseInfo.lname = req.body.userLastName;
        res.end("Info from Form  "+parseInfo.fname+" " +parseInfo.lname);


    });

http.createServer(app).listen(3456,'localhost');
console.log("Listening to port 3456");