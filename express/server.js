const express = require("express");
const app = express();

app.get("/",function(req,res){
        res.send("<h1>Hello</h1>");
})

app.get("/contact",function(req,res){
    res.send("Contact me on test.zig12345@gmail.com");
})

app.get("/test", function(req,res){
    res.send("I am working");
})

app.get("/about", function(req,res){
    res.send("I am Devil");
})

app.get("/nodemon", function(req,res){
    res.send("I am nodemon server");
})

app.get("/nodemontest", function(req,res){
    res.send("I am nodemon test server");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
