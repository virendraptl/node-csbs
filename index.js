// console.log('nodejs test');
// const http = require('http');
// http.createServer((req,resp)=>{
//     resp.write('this is nodejs test msg');
//     resp.end();
// }).listen(4500)

// *******************************************************

// const http = require('http');
// const data = require('./data')
// console.log(process.argv);
// http.createServer((req,resp)=>{
//     resp.writeHead(420,{"Content-Type":"Application\json"});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(6942)

// ***********************************************************

// const fs = require('fs');
// const input = process.argv;
// if(input[2] == 'add'){
//     fs.writeFileSync(input[3],input[4])
// } else if (input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// } else console.log('Invalid command!!!');

// **********************************************************

// const fs = require('fs');
// const path = require('path');
// const filesPath = path.join(__dirname,'files');
// console.log(filesPath);
// for(i=0;i<5;i++){
//     fs.writeFileSync(filesPath+"/file"+i+".txt", "this is the content for file "+i+" created dynamically")
// }

// fs.readdir(filesPath, (err,files)=>{
//     files.forEach(item =>{
//         console.log('File name:', item);
//     })
// })

// ***********************************************************

// const fs = require("fs");
// const path = require("path");

// const dirPath = path.join(__dirname, "crud");
// const filePath = `${dirPath}/newfile.txt`;

// fs.writeFileSync(filePath, "it starts with one thing..");

// fs.readFile(filePath,'utf-8', (err,data)=>{
//     console.log(data);
// })

// fs.appendFile(filePath, 'it doesnt even matter how hard you try...', err=>{
//     if(!err) console.log('file updated!!!');
// })

// fs.rename(filePath, `${dirPath}/renamedfile.txt`, err=>{
//     if(!err) console.log('file renamed!!!');
// });

// fs.unlinkSync(`${dirPath}/renamedfile.txt`);

// **********************************************************

// const express = require('express');
// const app = express();

// app.get('',(req,res)=>{
//     res.send('Hello, ' +req.query.name+'! this is the Home page!!!')
// })

// app.get('/about',(req,res)=>{
//     res.send('this is the About page!!!')
// })

// app.get('/help',(req,res)=>{
//     res.send('this is the Help page!!!')
// })

// app.listen(5000);

// ***********************************************************

// const express = require("express");
// const app = express();

// app.get("", (req, res) => {
//   res.send(`
//     <a href='/'>Home</a>
//   <a href='/about'>About</a>
//   <a href='/help'>Help</a>
//   <h1>this is the Home page!!!</h1>
//   `);
// });

// app.get("/about", (req, res) => {
//   res.send(`
//     <a href='/'>Home</a>
//   <a href='/about'>About</a>
//   <a href='/help'>Help</a>
//   <input type='text' placeholder='Enter Name'/>
//   <br/>
//   <br/>
//   <button>Submit</button>
//   `);
// });

// app.get("/help", (req, res) => {
//   res.send({
//     name: "Vap",
//     email: "user@test.in",
//   });
// });

// app.listen(5000);

// ****************************************************

// const express = require('express');
// const path = require('path')

// const app = express();
// const publicPath = path.join(__dirname,'public');

// app.use(express.static(publicPath))

// app.listen(5000);

// **************************************************

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.get('',(_,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/home',(_,resp)=>{
//     resp.sendFile(`${publicPath}/home.html`)
// })

// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })

// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/nopage.html`)
// })

// app.listen(5000);

// ********************************************************

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.set('view engine', 'ejs')

// app.get("", (_, resp) => {
//   resp.sendFile(`${publicPath}/index.html`);
// });

// app.get("/profile", (_, resp) => {
//     const user = {
//         name: 'Vap',
//         email: 'user@mail.in',
//         city: 'Pune',
//         frameworks: ['Angular','Vue','React']
//     }
//   resp.render('profile',{user});
// });

// app.get('/login',(_,resp)=>{
//   resp.render('login')
// })

// app.get("/home", (_, resp) => {
//   resp.sendFile(`${publicPath}/home.html`);
// });

// app.get("/about", (_, resp) => {
//   resp.sendFile(`${publicPath}/about.html`);
// });

// app.get("*", (_, resp) => {
//   resp.sendFile(`${publicPath}/nopage.html`);
// });

// app.listen(5000);

// *******************Appl level middleware*******************************************

// const express = require("express");
// const app = express();

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("Please provide age!");
//   } else if (req.query.age < 18) {
//     resp.send("Page Not Accessible!");
//   } else {
//     next();
//   }
// };

// app.use(reqFilter);

// app.get("/", (req, resp) => {
//   resp.send("This is the home page");
// });

// app.get("/users", (req, resp) => {
//   resp.send("This is users page");
// });

// app.listen(5000);

// *************************Route level middleware***********************

const express = require("express");
const reqFilter = require('./middleware')
const app = express();
const route = express.Router()

route.use(reqFilter)

app.get("/", (req, resp) => {
  resp.send("This is the home page");
});

app.get("/users", (req, resp) => {
  resp.send("This is users page");
});

route.get("/about", (req, resp) => {
  resp.send("This is About page");
});

route.get("/contact", (req, resp) => {
  resp.send("This is Contact page");
});

app.use('/',route)

app.listen(5000);