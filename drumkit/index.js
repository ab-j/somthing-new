var len = $(".drum").length;
for (let i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        makeSound(this.innerHTML); //this -->which button is clicked and innerHTML-->gives the key which is inside button
        ShowEffect(this.innerHTML);
    });

}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    ShowEffect(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;


        default:
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

function ShowEffect(key) {
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}