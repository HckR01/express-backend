const express=require('express');
const app=express();

const port=8080;
const path=require("path")
//set the engine to ejs
app.set('view engine','ejs');
//set the views directory in the ejs file for not give error if we run the node in parent
app.set('views',path.join(__dirname,'/views'))
app.get("/",(req,res)=>{
     res.render('home.ejs') 
     //we use render coz in the form of file if we wan send a big data to user then we use the render

})

app.listen(port,()=>{
      console.log('server is running ')
});
