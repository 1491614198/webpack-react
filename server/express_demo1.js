var express = require('express')
var app = express()

app.get('/',function (req,res) {
  res.send('hello world')
})

var server = app.listen(9090,function(){
   var host=server.address().address;
   var port = server.address().port;

   console.log('地址为： http://',host,port)

})