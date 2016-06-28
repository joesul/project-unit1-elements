console.log("main.js has loaded...");

var p1Element;
var p2Element;

//player 1 selection
function p1Chosen() {
  window.addEventListener("keydown", function(e) {
    if (e.keyCode == 81) {
      p1Element = "fire";
      console.log("Player 1 has chosen FIRE!");
      console.log(p1Element);
    }
    else if (e.keyCode == 87) {
      p1Element = "water";
      console.log("Player 1 has chosen WATER!");
    }
    else if (e.keyCode == 69) {
      p1Element = "earth";
      console.log("Player 1 has chosen EARTH!");
    }
    // else {
    //   alert("Player 1 please choose your element!")
    // }
  })
  return p1Element;
}
console.log(p1Element);

//player 2 selection
function p2Chosen() {
  window.addEventListener("keydown", function(e) {
    if (e.keyCode == 73) {
      p2Element = "fire";
      console.log("Player 2 has chosen FIRE!");
    }
    else if (e.keyCode == 79) {
      p2Element = "water";
      console.log("Player 2 has chosen WATER!");
    }
    else if (e.keyCode == 80) {
      p2Element = "earth";
      console.log("Player 2 has chosen EARTH!");
    }
    // else {
    //   alert("Player 2 please choose your element!")
    // }
  } )
  return p2Element;
}

var winner = function(choice1,choice2) {

  if (choice1 === choice2){
    alert ("The result is a tie!");
  }
  else if (choice1 === "fire"){
    if (choice2 === "earth"){
      alert ("fire wins!");
    }
    else{
      alert ("water wins!");
    }
  }

  else if (choice1 === "paper"){
    if (choice2 === "rock"){
      alert ("Paper wins!");
    }
    else{
      confirm ("Scissors wins!");
    }
  }

  else if (choice1 === "scissors"){
    if (choice2 === "paper"){
      confirm ("Scissors wins!");
    }
    else{
      confirm ("Rock wins!");
    }
  }

  };
winner(p1Element, p2Element)
