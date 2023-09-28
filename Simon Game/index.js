var buttonColurs = ["red","blue","green","yellow"];
var gamePattren =[]
var userClickedPattern = [];
var started = false;
var level = 0

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Levle"+level);
        nextSequnce();
        started = true;
    }

});


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userChosenColour.length-1);
});


function checkAnswer(currentLevel){
    
    if (gamePattren[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattren.length) {
            setTimeout(function(){
                nextSequnce();
            },1000);
        }
    }else{
        console.log("Wrong");
        gameOver();
        startOver();
    }
}

function nextSequnce(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Levle"+level);
    var randomNumber ; 
    randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColurs[randomNumber];
    gamePattren.push(randomChosenColour);
    
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    //console.log("working")
}

function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3")
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");

    },100);

}

function gameOver(){
    var audio = new Audio("./sounds/wrong.mp3")
    audio.play();

    $("body").addClass("game-over")
    setTimeout(function() {
        $("body").removeClass("game-over");

    

    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
}

function startOver(){
    level = 0;
    started = false;
    gamePattren = [];
}







 



