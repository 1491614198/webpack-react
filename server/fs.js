var fs=require('fs')

var data = fs.readFileSync('server/input.txt');

console.log(data.toString());