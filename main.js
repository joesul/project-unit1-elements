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
window.addEventListener("keydown", selection1);
window.addEventListener("keydown", selection2);
  function selection1(e) {
    var p1img = document.getElementById("p1img");
    var play = e.keyCode;
    switch (play) {
      case 81: p1img.innerHTML = "fire"; p1Choice = "fire";   window.removeEventListener("keydown", selection1); break;
      case 87: p1img.innerHTML = "water"; p1Choice = "water";   window.removeEventListener("keydown", selection1); break;
      case 69: p1img.innerHTML = "earth"; p1Choice = "earth";   window.removeEventListener("keydown", selection1); break;
      default: break;
    }
    e.stopPropagation();
    console.log(p1Choice);
    if ((p1Choice === "fire" || p1Choice === "water" || p1Choice === "earth") && (p2Choice === "fire" || p2Choice === "water" || p2Choice === "earth") ) {
      checkWin();
    }
  }

  function selection2(e) {
    var p2img = document.getElementById("p2img");
    var play = e.keyCode;
    switch (play) {
      case 73: p2img.innerHTML = "fire"; p2Choice = "fire"; window.removeEventListener("keydown", selection2); break;
      case 79: p2img.innerHTML = "water"; p2Choice = "water"; window.removeEventListener("keydown", selection2); break;
      case 80: p2img.innerHTML = "earth"; p2Choice = "earth";window.removeEventListener("keydown", selection2); break;
      default: break;
    }
    e.stopPropagation();
    console.log(p2Choice);
    if ((p1Choice === "fire" || p1Choice === "water" || p1Choice === "earth") && (p2Choice === "fire" || p2Choice === "water" || p2Choice === "earth") ) {
      checkWin();
    }

  }
}


// determine winner
  function checkWin() {
    if (p1Choice === p2Choice) {
      console.log("The result is a tie!");
      clear();
    }
    else if (p1Choice === "fire" && p2Choice === "earth") {
        console.log("fire wins!");
        p2HP--;
        console.log(`player 2 health: ${p2HP}`);
        clear();
    }
    else if (p1Choice === "water" && p2Choice === "fire") {
        console.log("water wins!");
        p2HP--;
        console.log(`player 2 health: ${p2HP}`);
        clear();
    }
    else if (p1Choice === "earth" && p2Choice === "water") {
        console.log("earth wins!");
        p2HP--;
        console.log(`player 2 health: ${p2HP}`);
        clear();
    }
    else if (p2Choice === "fire" && p1Choice === "earth") {
        console.log("fire wins!");
        p1HP--;
        console.log(`player 1 health: ${p1HP}`);
        clear();
    }
    else if (p2Choice === "water" && p1Choice === "fire") {
        console.log("water wins!");
        p1HP--;
        console.log(`player 1 health: ${p1HP}`);
        clear();
    }
    else if (p2Choice === "earth" && p1Choice === "water") {
        console.log("earth wins!");
        p1HP--;
        console.log(`player 1 health: ${p1HP}`);
        clear();
    }
  }


//clear selections
  function clear() {
    var p1img = document.getElementById("p1img");
    var p2img = document.getElementById("p2img");
    p1Choice = "";
    p2Choice = "";
    p1img.innerHTML="";
    p2img.innerHTML="";
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

// reset health
// function rematch() {
//   var rematchButton = querySelector("input");
//   rematchButton.addEventListener("onclick", function() {
//     window.location.reload();
//   })
//}
