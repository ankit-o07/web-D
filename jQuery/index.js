
// $("h1").addClass("hi")
// $("h1").removeClass("hi")
// $("h1").css("color","red");
// $("button").css("background-color","red");
// // $("h1").text("ankit")
// $("button").text("don't click ");
// $("button").html("<em>ankit</em>")
// console.log($("img").attr('src'));
// $("a").attr("href","https:/yahoo.com")

// $("h1").click(function(){
//     $("h1").css("color","purple")
// })
// $("h1").click(function(){
//     $("h1").css("color","cyan")
// })

// for (var i = 0;i<3;i++){
//     document.querySelectorAll("button")[i].addEventListener("click" , function(){
//         document.querySelector("h1").style.color = "red";
//     });
// }

// $("button").click(function(){
//     $("h1").css("color","red");
// });

$("input").keypress(function(event){
    $("h1").text(event.key)
    //console.log(event.key);
})

$("h1").before("<button>new</button>");

$("button").on("click",function(){
$("h1").slideUp().slideDown().animate({opacity: 0.5}).animate({opacity: 1})
    
})