/**
 * Created by viwil1 on 10/6/2016.
 */
var request = require('request');
 request('http://www.google.com',function(error,response,body)
 {
    if(!error && response.statusCode ==200){
        console.log(body);
    }
     if(error){
         console.log("Error",error);
     }
     if(response){
         console.log("response",response);
     }
     if(body){
         console.log("body",body);
     }

 });