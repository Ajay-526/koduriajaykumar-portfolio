var express=require('express');
var app=express();


app.use(express.static('views'))//static files displaying
app.use(express.static('styles'))//static files displaying


app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(5000,()=>{console.log("Port started")})