
const bodyParser = require('body-parser')
const express = require('express')

const app = express()

const go=bodyParser.urlencoded({extended:false})

// app.get('aaa.html',fgetunction(req,res){
//   res.sendFile(__dirname+"/"+"aaa.html")
// })
app.all('*',function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})
app.post('/api/demo',go,function(req,res){


     var response = {
       name:req.body.name,
       age:req.body.age,
     }
     res.status(200).send(JSON.stringify(response));

})

var server = app.listen(9090)