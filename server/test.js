var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'zhoulin5628',
  port:'3306',
  database:'demo1'
});

connection.connect();

// var sql = 'SELECT * from websites';

var addSql = 'delete from websites where id=4';


connection.query(addSql,function(err,result){
  if(err){
    console.log('1error');
    return
  }
  console.log('----------insert--------');
  console.log('insertId:'+result);
  console.log('-------------------------');
})

// connection.query(sql,function(err,result) {
//    if(err){
//      console.log("error")
//      return
//    }
//
//    console.log('----------------success------------------');
//    console.log(result)
// });

connection.end();