var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
bGround.log("Hello World");
console.log("Hello World");

app.use("/public",express.static(__dirname + "/public"))
app.get('/',(req,res)=>{
   
    res.sendFile(__dirname+"/views/index.html")
})
app.get('/json',(req,res)=>
{
    res.send({"message": "Hello json"})
})



































 module.exports = app;
