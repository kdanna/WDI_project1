
window.onload = function(){

	console.log("onload function works");

//Global Variable
var computerSequence = [];  //an array to keep track of computer moves
var playerSequence = []; //an array to keep track of the player's moves
var level = 0; //a counter to keep track of level
var startGameButton = document.getElementById("startButton").addEventListener("click", function(){
		setGame();
	});

var resetGameButton = document.getElementById("resetbutton").addEventListener("click", function(){
		resetGame();
	});


//the startGame function readys the game and calls the startRound function
	function setGame (){
		console.log("game is starting");
		computerSequence = [];
		playerSequence = []; 
		level = 0;
		startRound();
	}

//clears the level and sets game back at the beginning

	function resetGame(){
		console.log("resetGame function is working");
		setGame();
	}


//startRound sets the level to 1 and will increase by 1 each time it runs
	function startRound(){
		level = level+1;
		console.log(level);

	}

};