
const bodyParser = require('body-parser')
const express = require('express')
const mysql = require('mysql')
const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'zhoulin5628',
  port:'3306',
  database:'demo1'
})
connection.connect();

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


     // var response = {
     //   name:req.body.name,
     //   age:req.body.age,
     // }

     const bb= {
       id:req.body.id,
       name:req.body.name,
       url:req.body.url,
       country:req.body.country,
     }
     const message=[bb.name,bb.url,bb.country,bb.id]

     const add="update websites set name=?,url=?,country=? where id=?";

     connection.query(add,message,function(err,result) {
       if(err){
         console.log('insert error',err.message);
         return
       }
       console.log('---------insert---------');
       console.log('insert country',result);
       console.log('-------------------------');
     })

     connection.end();
     res.status(200).send(JSON.stringify(bb));

})

var server = app.listen(9090)