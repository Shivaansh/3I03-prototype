//alert(" generic1.js connected");
$("#Header").css("color", "red");
$("#phrase3").css("color", "red");

var message = "I HATE YOU is hateful! You sure you want to send this?";
var title = "HateLess Alert";

//turn Header text back to normal
$("#Header").on("click", function(){
    if($(this).text === "Screw You!!")
    {
        $(this).text("*******!!");
    }
    else{
        $(this).text("Screw You!!");
    }
});

//form checking and alert
$("#target").submit(function(event) {

    confirm("That comment qualifies as hateful content! Do you still want to keep it?");
    event.preventDefault();
 });


//windows message
$("#phrase3").on("click", function(){
        $(this).text("Windows is better than Linux for programming!!");
});

//Donald trump message
$("#phrase2").on("click", function(){
    $(this).text("Donald Trump tweeted something!");
});

//Hide button
$("#Hide").on("click", function(){
    $("#phrase2").text("*******");
    $("#phrase2").css("color", "red");
});

//Show button
$("#Show").on("click", function(){
    $("#phrase3").text("Windows is better than Linux for programming!!");
    $("#phrase3").css("color", "black");
});





/////////







