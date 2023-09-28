const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extends:true}));

app.get("/",function(req,res){
   res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    console.log(req.body.cityName);
    
}) 

// const url = "https://v2.jokeapi.dev/joke/Programming?type=single&amount=1";
// https.get(url,function(response){
//     // console.log(response);
//     response.on("data",function(data){
//         const jokesdata = JSON.parse(data);
//         const joke = jokesdata.joke
//         console.log(jokesdata);
//         // res.send(data);
//         res.send("<h1>The temp in london= "+joke+"</h1>");
//     })
// });
// // res.send("I am  working");



app.listen(3000,function(){
    console.log("Server is running on port 3000");
})