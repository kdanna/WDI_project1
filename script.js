
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
		setGame();
	}


//startRound sets the level to 1 and will increase by 1 each time it runs
	function startRound(){
		levelUp();

	}


//WORKS. levelUp will increase the level by 1 each time it is run
	function levelUp(){
		level++;
		document.getElementById("levelArea").innerHTML = level;
	}

//WORKS. first make a copy of the original array by using slice(). Then used FIsher-Yates algorithm to generate a random new array
	function computerRandom () {
  		computerSequence = ['box1','box2','box3','box4'];
		var randomArray = computerSequence.slice(0);
		for (var i = randomArray.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = randomArray[i];
	        randomArray[i] = randomArray[j];
	        randomArray[j] = temp;
	    }
	console.log(randomArray);
    return randomArray;	
}



		





};