'use strict';
console.log("wazzup");

var numberArray = [1,2,3];
var boxArray = [];
var randNumber;
// var randomArray = [];
var winner;

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('HELLO');
  document.getElementById('start').addEventListener('click', shuffle);
  document.getElementById('replay').addEventListener('click', resetGame);
  boxList.addEventListener('click', clickBox);
}

function shuffle() {
  console.log("num", randNumber);
  numberArray = numberArray.concat();
  var randomArray = [];
  randNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
  console.log("array", numberArray[Math.floor(Math.random() * numberArray.length)]);
  console.log("num", randNumber);
  document.location.href = "";
  console.log("inside start");

  // event.target.classList.add('winner');
}

function clickBox(event) {
  if(event.target.classList.contains('winner')) {

    var ohWhite = document.getElementsByClassName('white');
    var isWhite = event.target.classList.contains('white');
    event.target.classList.add('gold');
    event.target.classList.remove('white');
    document.getElementById("declare").innerHTML = "WINNER!";
    // alert("WINNER!");
  } else {
    event.target.classList.add('red');
    event.target.classList.remove('white');
    document.getElementById("declare").innerHTML = "LOSER!";
    // alert("LOSER!");
    }
    console.log("inside box");
  }

function startGame() {
  document.location.href = "";
  console.log("inside start");

}

function resetGame() {
  document.location.href = "";
  console.log("inside reset");
}
