var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
var bodyParser=require('body-parser');
bGround.log("Hello World");
console.log("Hello World");

app.use( bodyParser.urlencoded({extended: false})
)
app.use(bodyParser.json())

app.use(function(req, res, next) {
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
  })



app.use("/public",express.static(__dirname + "/public"))
app.get('/',(req,res)=>{
   
    res.sendFile(__dirname+"/views/index.html")
})
app.get('/json',(req,res)=>
{
    if(process.env.MESSAGE_STYLE == "uppercase")
    res.send({"message": "HELLO JSON"})
    else
    res.send({"message": "Hello json"})
})

app.get("/now",(req,res,next)=>
{
    req.time=new Date().toString()
    next();

},(req,res)=>
{
    res.send({time: req.time})
})


app.get('/:word/echo',(req,res)=>
{
    res.send({echo: req.params.word})
})

app.get("/name",(req,res)=>
{
    const q =req.query;

    res.send({name : q.first+" "+q.last})
})

app.post('/name',(req,res)=>
{
    const q =res.query;

    res.send({name : q.first+" "+q.last})
})


































 module.exports = app;
