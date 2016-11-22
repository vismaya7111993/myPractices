/**
 * Created by viwil1 on 10/5/2016.
 */
//console.log("Managing node packages");
//console.log("To check version"+process.version);

//var os = require('os');
//console.log(os.platform());
//var  module = require('C:/myPracticals/module.js');
//console.log(module.name);
//console.log(module.address(2,5));
//console.log(module.address('vi','wil'));

var http = require('http');
var handlerMethod = function(request,response){
    response.end("A sample string");
};
http.createServer(handlerMethod).listen(3456,'localhost');
console.log("A http server created on port number 3456");
