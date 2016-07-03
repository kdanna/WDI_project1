window.onload = setGame;

//UPDATE for homeowrk. combine start/clear button.  make it clear when click takes place (idea - set flash function each click) css shrink? 

//Global Variables
var computerSequence = []; //an array to keep track of computerSequence 
var playerSequence = []; //an array to keep track of the player's moves
var level = 0; //a counter to keep track of each round a player wins
var clickCounter  = 0; //a counter to keep track of the number of clicks

var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");
var bar4 = document.getElementById("bar4");


//Adding event listeners to each bar. The clickCounter will populate and the checkPlayerCLicks function will run when clicks happen.
playerSequence = [];

		$('#bar1').click(function() { 
			playerSequence.push(bar1.id);
			clickCounter++;
			checkPlayerClicks();
			$('#bar1').fadeOut(100).fadeIn(100);
		});

		$('#bar2').click(function() { 
			playerSequence.push(bar2.id);
			clickCounter++;
			checkPlayerClicks();
			$('#bar2').fadeOut(100).fadeIn(100);

		});

		$('#bar3').click(function() { 
			playerSequence.push(bar3.id);
			clickCounter++;
			checkPlayerClicks();
			$('#bar3').fadeOut(100).fadeIn(100);
		});

		$('#bar4').click(function() { 
			playerSequence.push(bar4.id);
			clickCounter++;
			checkPlayerClicks();
			$('#bar4').fadeOut(100).fadeIn(100);
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


//WORKS. The startGame function readys the game and calls the startRound function.
	function setGame (){
		computerSequence = [];
		playerSequence = []; 
		level = 0;
		document.getElementById("messageBox").innerHTML = "";
	}

//WORKS. clears the level and sets game back to its onload state. 
	function resetGame(){
		document.location.reload(true);
	}


//startRound sets the level to 1 and will increase by 1 each time it runs.
	function startRound(){
		levelUp();
		computerRandom();
		document.getElementById("messageBox").innerHTML = "The computer will flash " + level + " time(s).";
	}


//WORKS. levelUp will increase the level by 1 each time it is run.
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
		startFlash();
	}

//WORKS. This function is triggered once the computerRandom function runs.
	function startFlash () {
		for (var i =0; i < computerSequence.length; i++){	
				setFlash(i);
		}
	}


//WORKS.  Iterate through the computerSequence array and pass [i] to setFlash function.
	function setFlash(i){
				setTimeout(function(){	
						$("#"+computerSequence[i]).delay(200).fadeOut(300).fadeIn(300);
					}, i *1000);
		}


//WORKS. This function will run once the number of clicks reaches the length of the current computerSequence array.
	function checkPlayerClicks(){
		if (clickCounter === computerSequence.length){
				compareAgainstComp();
			}
	}


//WORKS.  This function turns each array into a string and then compares the values to see if they are the same. 
	function compareAgainstComp(){
	  if(JSON.stringify(computerSequence)===JSON.stringify(playerSequence)){
	  	playerSequence = [];
	  	clickCounter = 0;
	  	startRound();
	  	  }else{
	  	  	document.getElementById("messageBox").innerHTML = "Wrong Guess. GAME OVER. Press CLEAR & then START to try again.";
	  }

	}

