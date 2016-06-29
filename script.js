
window.onload = function(){

	console.log("onload function works");

//Global Variables
var computerSequence = []; //an array to keep trak of computerSequence 
var playerSequence = []; //an array to keep track of the player's moves
var level = 0; //a counter to keep track of level

var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");
var bar4 = document.getElementById("bar4");

//set the event listen on the start button
var startGameButton = document.getElementById("startButton").addEventListener("click", function(){
		setGame();
	});

//set the event listener for the reset button
var resetGameButton = document.getElementById("resetbutton").addEventListener("click", function(){
		resetGame();
	});

//using DOM manipulation to keep track of the level
document.getElementById("levelArea").innerHTML = level;


//WORKS. the startGame function readys the game and calls the startRound function
	function setGame (){
		console.log("setGame function is working");
		computerSequence = [];
		playerSequence = []; 
		level = 0;
		startRound();
	}

//WORKS. clears the level and sets game back at the beginning

	function resetGame(){
		console.log("resetGame function is working");
		computerSequence = [];
		playerSequence = []; 
		level = 0;
		document.getElementById("levelArea").innerHTML = "Press START to play again";
	}


//startRound sets the level to 1 and will increase by 1 each time it runs
	function startRound(){
		levelUp();
		computerRandom();
	}


//WORKS. levelUp will increase the level by 1 each time it is run
	function levelUp(){
		level++;
		document.getElementById("levelArea").innerHTML = "Current Round: " + level;
	}

//I think I am close to figuring this out.  A random number is generated 1-4. Each number is assigned to a colored bar.

	function computerRandom () {
	  	computerSequence = [];
	  	var randomNumber = Math.floor(Math.random()*(4))+1;
	  		if (randomNumber === 1){
	  			computerSequence.push(bar1);
	  		}else if (randomNumber === 2){
	  			computerSequence.push(bar2);
			}else if (randomNumber === 3){
				computerSequence.push(bar3);
			}else{
				computerSequence.push(bar4);
			}
		console.log(computerSequence);
		return computerSequence; 
}

//In process - I need to figure out how to add listener to each bar...
	playerSequence = [];
	$("#box1, #box2, #box3, #box4").click(function(){
	playerSequence.push($this.val());
				console.log(playerSequence);
			});



};



















