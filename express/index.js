const express = require('express');
const app = express();

const port=8080;
 app.listen(port,()=>console.log(`server ${port} is on`));


//  app.use((req,res)=>{
//       console.log('hey request received');
//       res.send('hey response sent');
//  });

 app.get('/',(req,res)=>{
       res.send('you are now in root path');
 })
//  app.get('/apple',(req,res)=>{
//        res.send('you are now in apple path');
//  })
// app.get('/banana', (req, res) => {
//     res.send(`
//         <h1>You are now in banana path</h1>
//         <a href="https://www.google.com/search?q=banana" target="_blank">Search banana</a>
//     `);
// });
//...............................................................................................................
//path parameter is the dynamic part of the url that is passed to the server use for dynamic data

// app.get("/:username", (req, res) => {
//     res.send(`Hello, user: ${req.params.username}`);
//     console.log(`Hello, user: ${req.params.username}`);
// });

//.......................................................................................

//urls and query strings handelings











// if user pur wild card route for handelinng thta use star 

// app.use((req, res) => {
//     res.status(404).send('404 - Not Found');
// });
