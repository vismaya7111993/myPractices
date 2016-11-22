/**
 * Created by viwil1 on 10/6/2016.
 **/
var request = require('request');
var fs = require('fs');

request("http://localhost:3456/hello",function(response,error,body){
    if(error){
        console.log(error);
    }
    //console.log(response.body);
    //console.log(response.headers);

})

.pipe(fs.createWriteStream("new.txt"));

var options = {
    url:"/demo",
    headers:{'x':"myHeader"}
}
var cb = function(response,error,body){
    if(error){
        console.log(error);
    }
    else{
        console.log(body);
    }
}
request(options,cb);
