
var wordBank = ["ignorance", "tract", "combine", "cry", "eyebrow", "invite", "vague", "beer", "attitude", "classify", "tax", "east", "forward", "guard", "complete", "smile", "book", "mill", "fitness", "implication"]
var hangmanWord;
var hideHangmanWord;
var guess;
var guessesSoFar = [ ];
var guessesLeft;
var wins = 0;
var wordLetters = [ ];

randomWord();
hideWord();

document.onkeyup = function() {
	
	guess = event.key;
	guessesLeft = hangmanWord.length;
	guessesSoFar.push(" " + guess);
	console.log(guess);
	console.log(guessesLeft);
	
 	for(i=0; i<wordLetters.length; i++)
 	{
		if (guess === wordLetters[i]) 
		{
			console.log("match");
			document.querySelector("#hangmanword").innerHTML += guess;
			guessesLeft--;
			break;
		}

		else 
		{
			console.log("no match");
			
			guessesLeft--;
			document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
		
		}
 	};
	
	document.querySelector("#guessesSoFar").innerHTML = "Your Guesses so far: " + guessesSoFar;
};





//writes to the HTML a "-" for each letter in the randomly selected word. 
function hideWord() 
{
	for (i = 0; i < hangmanWord.length; i++) { 
    	document.querySelector("#hangmanword").innerHTML += "-";
	}
	
}

//generates a random word from the array stored in the wordBank variable.
function randomWord()
{
	hangmanWord = wordBank[Math.floor(Math.random()*wordBank.length)];
	console.log(hangmanWord);
	for (i=0; i<hangmanWord.length; i++)
	{
		var letter = hangmanWord.charAt(i);
		wordLetters.push(letter);
	};
	console.log(wordLetters);		
};

//resets everything except the wins and losses values.
function reset() {
	randomWord();
	guessesLeft = 10;
	guessesSoFar = [ ];
	guessesLeft = 10;
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};







		// var computerGuess;
		// var guessesLeft = 10;
		// var guess;
		// var wins = 0;
		// var losses = 0;
		// var guessesSoFar = [ ];

		// //intial random letter is generated
		// randomLetter();

		// document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

		// //when a letter key is pressed it is assigned to the guess variable then if statements decide if it is the same letter that the computer generated. 
		// document.onkeyup = function() {
		// 	guess = event.key;
		// 	guessesSoFar.push(" " + guess);
		// 	console.log(guess);
		// 	console.log(computerGuess);
		// 	console.log(guessesLeft);

		// 	if (guess === computerGuess) {
		// 	console.log("match");
		// 	alert ("You Won!");
		// 	wins++;
		// 	document.querySelector("#wins").innerHTML = "Wins: " + wins;
		// 	reset();
		// 	}

		// 	else {
		// 		console.log("no match");
		// 		guessesLeft--;
		// 		document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

		// 		if (guessesLeft === 0) {
		// 			reset();
		// 			alert("You Lost!")
		// 			losses++;
		// 			document.querySelector("#losses").innerHTML = "Losses: " + losses;
		// 		}
	
		// 	}

		// 	document.querySelector("#guessesSoFar").innerHTML = "Your Guesses so far: " + guessesSoFar;
		// };

		// //resets everything except the wins and losses values.
		// function reset() {
		// 	randomLetter();
		// 	guessesLeft = 10;
		// 	guessesSoFar = [ ];
		// 	guessesLeft = 10;
		// 	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
		// };

		// //generates a random letter
		// function randomLetter() {
		// 	computerGuess = String.fromCharCode(
		//     Math.floor(Math.random() * 26) + 97
		// 	);
		// };