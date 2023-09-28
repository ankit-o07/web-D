
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImageSource = "./images/dice"+ randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
var img = "./images/dice1.png"
image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "./images/dice"+ randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
var img = "./images/dice1.png"
image2.setAttribute("src",randomImageSource2);


if (randomNumber1>randomNumber2){
    document.getElementById("head").innerHTML= "Player 1 win"
    

}

else if(randomNumber1<randomNumber2){
    document.getElementById("head").innerHTML= "Player 2 win"
}
else{
    document.getElementById("head").innerHTML= "draw"
    
}