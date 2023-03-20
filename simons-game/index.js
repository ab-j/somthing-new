var gamePattern = [];
var userClickedPattern = [];
var arr = ['red', 'blue', 'green', 'yellow'];
var started = false;
var level = 0;

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})
$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
      
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {
        console.log("wrong");
        var wrongSound=new Audio("./sounds/wrong.mp3");
        wrongSound.play();
        $(document).addClass("game-over");
        setTimeout(function () {
            $(document).removeClass("game-over");
        },1000);
        $("#level-title").text=("Game Over");
        startOver();
    }
}
function nextsequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var newNo = Math.floor(Math.random() * 4);
    gamePattern.push(arr[newNo]);

    $("#" + arr[newNo]).classList.add("blink");
    setTimeout(function () {
        $("#" + arr[newNo]).classList.remove("blink");
    }, 100);
    playSound(arr[newNo]);
    // animatePress(arr[newNo]);

}


function playSound(name) {
    switch (name) {
        case 'red':
            var rAudio = new Audio('./sounds/red.mp3');
            rAudio.play();
            break;
        case 'yellow':
            var yAudio = new Audio('./sounds/yellow.mp3');
            yAudio.play();
            break;
        case 'blue':
            var bAudio = new Audio('./sounds/blue.mp3');
            bAudio.play();
            break;
        case 'green':
            var gAudio = new Audio('./sounds/green.mp3');
            gAudio.play();
            break;

        default:
            var wAudio = new Audio('./sounds/wrong.mp3');
            wAudio.play();
            break;
    }
}

function animatePress(key) {

    $("#" + key).addClass("pressed");
    setTimeout(function () {
        $("#" + key).removeClass("pressed");
    }, 100);
}



function startOver() {
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    started=false;
}