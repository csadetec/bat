var fsm = require('fs-meta').sync;
 
var contents = fsm.readFile('teste.xls');
console.log(contents)