

let player1=Math.floor(Math.random()*6);
let player2=Math.floor(Math.random()*6);


let arr = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png',"images/dice6.png"];

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", arr[player1]);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", arr[player2]);


if (player1>player2) {
    document.querySelector('h1').innerHTML='player 1 wins';
}
else if (player1<player2) {
    document.querySelector('h1').innerHTML='player 2 wins';
}
else{
    document.querySelector('h1').innerHTML='DRAW';
}