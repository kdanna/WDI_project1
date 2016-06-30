window.onload = setGame;

//Global Variables

var computerSequence = []; //an array to keep trak of computerSequence 
var playerSequence = []; //an array to keep track of the player's moves
var level = 0; //a counter to keep track of level
var clickCounter  = 0;

var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");
var bar4 = document.getElementById("bar4");

// Adding event listeners to each bar and it will populate the playerSequence when pressed
	
		playerSequence = [];
		$('#bar1').click(function() { 
			playerSequence.push(bar1.id);
			clickCounter++;
			checkPlayerClicks();
		});

		$('#bar2').click(function() { 
			playerSequence.push(bar2.id);
			clickCounter++;
			checkPlayerClicks();
		});

		$('#bar3').click(function() { 
			playerSequence.push(bar3.id);
			clickCounter++;
			checkPlayerClicks();
		});

		$('#bar4').click(function() { 
			playerSequence.push(bar4.id);
			clickCounter++;
			checkPlayerClicks();
		});


//set the event listen on the start button
var startGameButton = document.getElementById("startButton").addEventListener("click", function(){
		startRound();
	});

//set the event listener for the reset button
var resetGameButton = document.getElementById("resetbutton").addEventListener("click", function(){
		resetGame();
	});

//using DOM manipulation to keep track of the level
document.getElementById("levelArea").innerHTML = "Round: " + level;


//WORKS. the startGame function readys the game and calls the startRound function
	function setGame (){
		console.log("setGame function is working");
		computerSequence = [];
		playerSequence = []; 
		level = 0;
		document.getElementById("messageBox").innerHTML = "";
	}

//WORKS. clears the level and sets game back to its onload state. 
	function resetGame(){
		document.location.reload(true);
		console.log("resetGame function is working");
		// computerSequence = [];
		// playerSequence = []; 
		// level = 0;
	}


//startRound sets the level to 1 and will increase by 1 each time it runs
	function startRound(){
		levelUp();
		computerRandom();
	}


//WORKS. levelUp will increase the level by 1 each time it is run
	function levelUp(){
		level++;
		document.getElementById("levelArea").innerHTML = "Round: " + level;
	}

//WORKS. random number is generated 1-4. Each number is assigned to a colored bar.

	function computerRandom(){
	  	var randomNumber = Math.floor(Math.random()*(4))+1;
	  		if (randomNumber === 1){
	  			computerSequence.push(bar1.id);
	  		}else if (randomNumber === 2){
	  			computerSequence.push(bar2.id);
			}else if (randomNumber === 3){
				computerSequence.push(bar3.id);
			}else{
				computerSequence.push(bar4.id);
			}
		console.log("the computerSequence is " + computerSequence);
		startFlash();
	}


//WORKS.  Iterate through the computerSequence array and pass [i] to setFlash function.
	function setFlash(i){
				setTimeout(function(){	
						$("#"+computerSequence[i]).delay(200).fadeOut(300).fadeIn(300);
					}, i *1000);
		}

//WORKS. This function is triggered once the computerRandom function runs.
	function startFlash () {
		for (var i =0; i < computerSequence.length; i++) 
				setFlash(i);
	}


function checkPlayerClicks(){

	if (clickCounter === computerSequence.length){
			compareAgainstComp();
		}
}


//Function works on its own. Try to figure out how to have it fire once clicks come in.
function compareAgainstComp(){
  if(JSON.stringify(computerSequence)===JSON.stringify(playerSequence)){
  	playerSequence = [];
  	clickCounter = 0;
  	startRound();
  	  }else{
  	  	document.getElementById("messageBox").innerHTML = "Wrong Guess. GAME OVER. Press CLEAR & then START & try again.";
  		console.log("game over");
  }
}

