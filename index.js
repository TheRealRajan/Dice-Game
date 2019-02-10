// Entering player names and couldnt get it to work
var player1 = prompt("Enter name of Player 1 !");
var player2 = prompt("Enter name of Player 2 !")
document.querySelector(".player1").innerHTML= player1;
document.querySelector(".player2").innerHTML= player2;

// Generating first random number
var randomnNumber1= Math.floor(Math.random()*6) + 1;
var randomDiceImage1 = "dice" + randomnNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

// Generating second random number
var randomnNumber2= Math.floor(Math.random()*6) + 1;
var randomDiceImage2 = "dice" + randomnNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// if(randomnNumber1==1){
//   document.querySelector("img1").setAttribute("src","images/dice1.png");
// }
// else if (randomnNumber1===2) {
//   document.querySelector("dice img1").setAttribute("src",'images/dice2.png');
// }
// else if (randomnNumber1===3) {
//   document.querySelector("dice img1").setAttribute("src","images/dice3.png");
// }
// else if (randomnNumber1===4) {
//   document.querySelector("dice img1").setAttribute("src","images/dice4.png");
// }
// else if (randomnNumber1===5) {
//   document.querySelector("dice img1").setAttribute("src","images/dice5.png");
// }
// else if (randomnNumber1===6) {
//   document.querySelector("dice img1").setAttribute("src","images/dice6.png");
// }
//
// var randomnNumber2= Math.random();
// randomnNumber2= randomnNumber1*6;
// randomnNumber2=Math.floor(randomnNumber2)+1;
// if(randomnNumber2===1){
//   document.querySelector("img2").setAttribute("src","images/dice1.png");
// }
// else if (randomnNumber2===2) {
//   document.querySelector("img2").setAttribute("src","images/dice2.png");
// }
// else if (randomnNumber2===3) {
//   document.querySelector("img2").setAttribute("src","images/dice3.png");
// }
// else if (randomnNumber2==4) {
//   document.querySelector=("img2").setAttribute("src","images/dice4.png");
// }
// else if (randomnNumber2===5) {
//   document.querySelector("img2").setAttribute("src","images/dice5.png");
// }
// else if (randomnNumber2===6) {
//   document.querySelector("img2").setAttribute("src","images/dice6.png");
// }
//

// Checking for the winner
if (randomnNumber1===randomnNumber2){
  document.querySelector("h1").innerHTML="Draw ! ";
}
else if (randomnNumber1>randomnNumber2) {
  document.querySelector("h1").innerHTML=" 🚩 " + player1 +  " wins !";
}
else if (randomnNumber1<randomnNumber2) {
  document.querySelector("h1").innerHTML=player2 + " wins! 🚩";
}
