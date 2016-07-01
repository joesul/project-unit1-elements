console.log("main.js has loaded...");
document.addEventListener("DOMContentLoaded", start());

//global variables
var p1Choice = "";
var p2Choice = "";
var p1HP = 3;
var p2HP = 3;

//starts game
function start () {
  selection();
}

//player 1 and 2 selections
function selection(){
//adding event listener for player1 and player2
window.addEventListener("keydown", selection1);
window.addEventListener("keydown", selection2);
//player 1 selection
  function selection1(e) {
    var p1img;
    var play = e.keyCode;
    switch (play) {
      case 81: console.log("fire"); p1Choice = "fire";   window.removeEventListener("keydown", selection1); break;
      case 87: console.log("water"); p1Choice = "water";   window.removeEventListener("keydown", selection1); break;
      case 69: console.log("earth"); p1Choice = "earth";   window.removeEventListener("keydown", selection1); break;
      default: break;
    }
    e.stopPropagation();
    if ((p1Choice === "fire" || p1Choice === "water" || p1Choice === "earth") && (p2Choice === "fire" || p2Choice === "water" || p2Choice === "earth") ) {
      checkWin();
    }
  }
//player 2 selection
  function selection2(e) {
    var p2img;
    var play = e.keyCode;
    switch (play) {
      case 73: console.log("fire"); p2Choice = "fire"; window.removeEventListener("keydown", selection2); break;
      case 79: console.log("water"); p2Choice = "water"; window.removeEventListener("keydown", selection2); break;
      case 80: console.log("earth"); p2Choice = "earth";window.removeEventListener("keydown", selection2); break;
      default: break;
    }
    e.stopPropagation();
    if ((p1Choice === "fire" || p1Choice === "water" || p1Choice === "earth") && (p2Choice === "fire" || p2Choice === "water" || p2Choice === "earth") ) {
      checkWin();
    }
  }
}


// determine winner
  function checkWin() {

    var p1Health = document.querySelector("#p1Health");
    var p2Health = document.querySelector("#p2Health");

    if (p1Choice === p2Choice) {
      alert("The result is a tie!");
    }
    else if (p1Choice === "fire" && p2Choice === "earth") {
      alert("Player 1 chose Element: Fire \nPlayer 2 chose Element: Earth")
      alert("Fire beats Earth!");
      p2HP--;
      p2Health.innerText = `Health: ${p2HP}`;
    }
    else if (p1Choice === "water" && p2Choice === "fire") {
      alert("Player 1 chose Element: Water \nPlayer 2 chose Element: Fire")
      alert("Water beats Fire!");
      p2HP--;
      p2Health.innerText = `Health: ${p2HP}`;
    }
    else if (p1Choice === "earth" && p2Choice === "water") {
      alert("Player 1 chose Element: Earth \nPlayer 2 chose Element: Water")
      alert("Earth beats Water!");
      p2HP--;
      p2Health.innerText = `Health: ${p2HP}`;
    }
    else if (p2Choice === "fire" && p1Choice === "earth") {
      alert("Player 1 chose Element: Earth \nPlayer 2 chose Element: Fire")
      alert("Fire beats Earth!");
      p1HP--;
      p1Health.innerText = `Health: ${p1HP}`;
    }
    else if (p2Choice === "water" && p1Choice === "fire") {
      alert("Player 1 chose Element: Fire \nPlayer 2 chose Element: Water")
      alert("Water beats Fire!");
      p1HP--;
      p1Health.innerText = `Health: ${p1HP}`;
    }
    else if (p2Choice === "earth" && p1Choice === "water") {
      alert("Player 1 chose Element: Water \nPlayer 2 chose Element: Earth")
      alert("Earth beats Water!");
      p1HP--;
      p1Health.innerText = `Health: ${p1HP}`;
    }

    clear();
  }


//clear selections
  function clear() {
    p1Choice = "";
    p2Choice = "";
    if (p1HP > 0 && p2HP >0) {
    start();
    }
    else if (p1HP == 0) {
      alert("Player 2 WINS!");
    }
    else if (p2HP == 0) {
      alert("Player 1 WINS!")
    }
  }
