// console.log('nodejs test');
const http = require('http');
http.createServer((req,resp)=>{
    resp.write('this is nodejs tst msg');
    resp.end();
}).listen(4500)