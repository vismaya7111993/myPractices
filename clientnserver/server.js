/**
 * Created by viwil1 on 10/6/2016.
 */
var connect = require('connect');
connect().use(function(req,res){

    if(req.url == "/hello"){
        console.log("Entered in to / hello");
        res.end("sussessfull");
    }
    if(req.url = "/demo"){
        console.log("Entered in to /demo");
        var headers = req.headers;
        console.log("Headers",headers);
        res.end("completed");
    }
    else{
        res.end("No Headers");
    }
})
.listen(3456);
console.log("Server listening to port 3456");