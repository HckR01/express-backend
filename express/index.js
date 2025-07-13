const express = require('express');
const app = express();

const port=3000;
 app.listen(port,()=>console.log(`server ${port} is on`));


 app.use((req,res)=>{
      console.log('hey request received');
      res.send('hey response sent');
 });