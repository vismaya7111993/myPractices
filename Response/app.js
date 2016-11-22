/**
 * Created by viwil1 on 10/6/2016.
 */
var connect = require('connect');

var app = connect().use(function(req,res){
    if(req.url == "/hello"){
        console.log("url with /hello");
        res.end("HELLLOOO");
    }
    if(req.url == "/hello.json"){
        console.log("Sending json data");
        var data = "Hello";
        var jsonData = JSON.stringify(data);
        console.log(jsonData);
        res.setHeader('Content-Type','application/json');
        res.end(jsonData);
    }
    if(req.url == "/s"){
        res.statusCode = 404;
        res.end("OOPS! cannot find something");
    }
    if(req.url == "/app/mn"){
        console.log("smileeeeeee....");
        res.end("Fantastic");
    }
})
.listen(3456,'localhost');
console.log("Listening to Port 3456");