var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$("btn").on("click", function () {
    var userChosenColour = $(this).attr("#");
    userClickedPattern.push(userChosenColour);

});

var randomChosenColour = randomNumber;
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#", randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100);
    var audio = new Audio('/FULLSTACK/Simon Game Challenge Starting Files/SOUNDS ' + randomChosenColour + ".mp3");
    audio.play();


}

