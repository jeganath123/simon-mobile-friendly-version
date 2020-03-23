//declaration
var gamePattern = [];  //assign gamePattern array
var userClickedPattern = []; //assign userClickedPattern array
var buttonColors = ["red", "blue", "green", "yellow"]; //assign buttonColors array with 4 values
var levelCount = 0; //assign levelCount==0
var randomChosenColor //declare randomChosenColor var
var randomNumber //declare randomNumber var

//start
$("button").click(function(){ //click start button to start
  nextSequence(); //execute next sequence
})
$("#level-title")
$(document).keypress(function() { //click any key to start
  nextSequence(); //execute next sequence
});

//userChosenColor button
var userChosenColor;
$(".btn").click(function() { // click event find the button press
  userChosenColor = this.id; // this.id gives the id i.e("green") and saving it in the userChosenColor
  playsound(userChosenColor); //play sound for the particular color by pcalling the playsound function
  animatePress(userChosenColor); //blink the buttons
  userClickedPattern.push(userChosenColor); //push the value eg."green" to the userClickedPattern array
console.log(userClickedPattern)
  //check the user sequence
  var currentlevel = userClickedPattern.indexOf(userChosenColor) //get the index value of the particular element
  checkAnswer(currentlevel); //calling the checkAnswer function to compare the uservalue vs randomvalue
console.log(currentlevel)

});

//animatefunction
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed")
  setTimeout(function(){
      $("#" + currentColor).removeClass("pressed")
  },200)

}

//sound function
function playsound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

//check answer forin
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) { //check the value of current index in both the array
    // console.log(gamePattern[currentLevel])
    // console.log(userClickedPattern[currentLevel])
    // console.log("success1")
    // console.log(userClickedPattern)
    // console.log(gamePattern)
    if (userClickedPattern.length === gamePattern.length) { //check the length of the both the array
      // console.log("success2")
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  } else {
    var gameOverSound=new Audio("sounds/wrong.mp3"); //assign wrong.mp3 to gameOverSound
    gameOverSound.play(); //play the sound
    $("body").addClass("game-over"); //add game over class to body
    setTimeout(function(){
      $("body").removeClass("game-over");//remove game over class from body after 500millisecond
    },500);

      $("#level-title").html("Game Over, Press Any Key to Restart"); //change html to Game Over, Press Any Key to Restart
      levelCount=0;
      gamePattern = [];
    console.log("fail")
  }
}

//nextsequence
function nextSequence() {
  userClickedPattern = []; //empty the userClickedPattern array
  levelCount++; //increase the levelCount
  $("#level-title").html("level " + levelCount); //Replacing title with the levelCount value
  randomNumber = Math.floor(Math.random() * 4); //generating randomNumber value and assigning between 0-3
  randomChosenColor = buttonColors[randomNumber]; //getting the array value of the buttonColors by creating index using randomNumber
  playsound(randomChosenColor); //play sound for the particular color by pcalling the playsound function
  gamePattern.push(randomChosenColor); //push the value eg."green" to the gamePattern array
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //blink the buttons
  console.log(gamePattern)


}
