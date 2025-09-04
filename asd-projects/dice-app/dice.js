$(document).ready(function () {
  // Your code goes here

  function makeDot(top, left, elementID) {
  $("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", top)
  .css("left", left)
  .appendTo(elementID);
  }
  
  function rollDie (){
    $("#die").empty();
    console.log("clicked")
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
    if (randomNum === 1) {
  makeDot(50, 50, "#die"); // middle middle
} else if (randomNum === 2) {
  makeDot(25, 25, "#die"); // top left
  makeDot(75, 75, "#die"); // bottom right
} else if (randomNum === 3) {
  makeDot(25, 25, "#die"); // top left
  makeDot(75, 75, "#die"); // bottom right
  makeDot(50, 50, "#die"); // middle middle
} else if (randomNum === 4) {
  makeDot(75, 75, "#die"); // bottom right
  makeDot(25, 25, "#die"); // top left
  makeDot(25, 75, "#die"); // bottom left
  makeDot(75, 25, "#die"); // top right
} else if (randomNum === 5) {
  makeDot(50, 50, "#die"); // middle middle
  makeDot(75, 75, "#die"); // bottom right
  makeDot(25, 25, "#die"); // top left
  makeDot(25, 75, "#die"); // bottom left
  makeDot(75, 25, "#die"); // top right
}
else if (randomNum === 6){
  makeDot(25, 25, "#die"); // middle middle
  makeDot(50, 25, "#die"); // bottom right
  makeDot(75, 25, "#die"); // top left
  makeDot(50, 75, "#die"); // bottom left
  makeDot(75, 75, "#die"); // top right
  makeDot(25, 75, "#die"); // top right
  }
  }
  function rollDie2 (){
    $("#die2").empty();
    console.log("clicked")
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
    if (randomNum === 1) {
  makeDot(50, 50, "#die2"); // middle middle
} else if (randomNum === 2) {
  makeDot(25, 25, "#die2"); // top left
  makeDot(75, 75, "#die2"); // bottom right
} else if (randomNum === 3) {
  makeDot(25, 25, "#die2"); // top left
  makeDot(75, 75, "#die2"); // bottom right
  makeDot(50, 50, "#die2"); // middle middle
} else if (randomNum === 4) {
  makeDot(75, 75, "#die2"); // bottom right
  makeDot(25, 25, "#die2"); // top left
  makeDot(25, 75, "#die2"); // bottom left
  makeDot(75, 25, "#die2"); // top right
} else if (randomNum === 5) {
  makeDot(50, 50, "#die2"); // middle middle
  makeDot(75, 75, "#die2"); // bottom right
  makeDot(25, 25, "#die2"); // top left
  makeDot(25, 75, "#die2"); // bottom left
  makeDot(75, 25, "#die2"); // top right
}
else if (randomNum === 6){
  makeDot(25, 25, "#die2"); // middle middle
  makeDot(50, 25, "#die2"); // bottom right
  makeDot(75, 25, "#die2"); // top left
  makeDot(50, 75, "#die2"); // bottom left
  makeDot(75, 75, "#die2"); // top right
  makeDot(25, 75, "#die2"); // top right
  }
  }
  function rollDie3 (){
    $("#die3").empty();
    console.log("clicked")
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
    if (randomNum === 1) {
  makeDot(50, 50, "#die3"); // middle middle
} else if (randomNum === 2) {
  makeDot(25, 25, "#die3"); // top left
  makeDot(75, 75, "#die3"); // bottom right
} else if (randomNum === 3) {
  makeDot(25, 25, "#die3"); // top left
  makeDot(75, 75, "#die3"); // bottom right
  makeDot(50, 50, "#die3"); // middle middle
} else if (randomNum === 4) {
  makeDot(75, 75, "#die3"); // bottom right
  makeDot(25, 25, "#die3"); // top left
  makeDot(25, 75, "#die3"); // bottom left
  makeDot(75, 25, "#die3"); // top right
} else if (randomNum === 5) {
  makeDot(50, 50, "#die3"); // middle middle
  makeDot(75, 75, "#die3"); // bottom right
  makeDot(25, 25, "#die3"); // top left
  makeDot(25, 75, "#die3"); // bottom left
  makeDot(75, 25, "#die3"); // top right
}
else if (randomNum === 6){
  makeDot(25, 25, "#die3"); // middle middle
  makeDot(50, 25, "#die3"); // bottom right
  makeDot(75, 25, "#die3"); // top left
  makeDot(50, 75, "#die3"); // bottom left
  makeDot(75, 75, "#die3"); // top right
  makeDot(25, 75, "#die3"); // top right
  }
  }
  function rollDie4 (){
    $("#die4").empty();
    console.log("clicked")
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
    if (randomNum === 1) {
  makeDot(50, 50, "#die4"); // middle middle
} else if (randomNum === 2) {
  makeDot(25, 25, "#die4"); // top left
  makeDot(75, 75, "#die4"); // bottom right
} else if (randomNum === 3) {
  makeDot(25, 25, "#die4"); // top left
  makeDot(75, 75, "#die4"); // bottom right
  makeDot(50, 50, "#die4"); // middle middle
} else if (randomNum === 4) {
  makeDot(75, 75, "#die4"); // bottom right
  makeDot(25, 25, "#die4"); // top left
  makeDot(25, 75, "#die4"); // bottom left
  makeDot(75, 25, "#die4"); // top right
} else if (randomNum === 5) {
  makeDot(50, 50, "#die4"); // middle middle
  makeDot(75, 75, "#die4"); // bottom right
  makeDot(25, 25, "#die4"); // top left
  makeDot(25, 75, "#die4"); // bottom left
  makeDot(75, 25, "#die4"); // top right
}
else if (randomNum === 6){
  makeDot(25, 25, "#die4"); // middle middle
  makeDot(50, 25, "#die4"); // bottom right
  makeDot(75, 25, "#die4"); // top left
  makeDot(50, 75, "#die4"); // bottom left
  makeDot(75, 75, "#die4"); // top right
  makeDot(25, 75, "#die4"); // top right
  }
  }
function rollDie5 (){
    $("#die5").empty();
    console.log("clicked")
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
    if (randomNum === 1) {
  makeDot(50, 50, "#die5"); // middle middle
} else if (randomNum === 2) {
  makeDot(25, 25, "#die5"); // top left
  makeDot(75, 75, "#die5"); // bottom right
} else if (randomNum === 3) {
  makeDot(25, 25, "#die5"); // top left
  makeDot(75, 75, "#die5"); // bottom right
  makeDot(50, 50, "#die5"); // middle middle
} else if (randomNum === 4) {
  makeDot(75, 75, "#die5"); // bottom right
  makeDot(25, 25, "#die5"); // top left
  makeDot(25, 75, "#die5"); // bottom left
  makeDot(75, 25, "#die5"); // top right
} else if (randomNum === 5) {
  makeDot(50, 50, "#die5"); // middle middle
  makeDot(75, 75, "#die5"); // bottom right
  makeDot(25, 25, "#die5"); // top left
  makeDot(25, 75, "#die5"); // bottom left
  makeDot(75, 25, "#die5"); // top right
}
else if (randomNum === 6){
  makeDot(25, 25, "#die5"); // middle middle
  makeDot(50, 25, "#die5"); // bottom right
  makeDot(75, 25, "#die5"); // top left
  makeDot(50, 75, "#die5"); // bottom left
  makeDot(75, 75, "#die5"); // top right
  makeDot(25, 75, "#die5"); // top right
  }
  }
  $("#die").on("click", rollDie);
  $("#die2").on("click", rollDie2);
  $("#die3").on("click", rollDie3);
  $("#die4").on("click", rollDie4);
  $("#die5").on("click", rollDie5);
});

