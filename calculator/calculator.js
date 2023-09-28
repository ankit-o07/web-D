const express = require("express");
const bodyPaeser = require("body-parser");

const app = express();
app.use(bodyPaeser.urlencoded({extended: true}))


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmi.html")

})

app.post("/bmi",function(req,res){
    var h = Number(req.body.h);
    var w = Number(req.body.w);
    var result = w/(h*h);
    res.send("The Bmi is "+result);
})


app.post("/",function(req,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    // console.log(req.body)
    res.send("The result of calculation  "+result)
})
app.get("/test",function(req,res){
    console.log(__dirname);
})



app.listen(3000, function(){
    console.log("Server started on port 3000");
});
