// require prompt to use to make the game ... not working

// require the objects/exports you will use

var inquirer = require('inquirer');

var inquirer = require('prompt');

var Word = require('./word.js');

var Game = require('./game.js');

prompt.start();

game = {
	words : Game.bank,
	wordsWon : 0,
	remaining : 10,
	guessedLetters : [],
	current : null,
	start : function(wrd){
		this.reset();
		this.current = new Word.Word(this.words[Math.floor(Math.random() * this.words.length)]);
		this.current.getLetters();
		console.log("Hangman!");
		console.log("Books!")
		console.log(this.current.renderedWord() + '\n');
		this.promptUser();
	},

	reset : function(){
		this.guessRemaining = 10;
	},

	promptUser : function(){
		var self = this;
		prompt.get(['guessLetter'], function(err, result) {
		    console.log('You guessed: ' + result.guessLetter);
		    var userGuess = self.current.repeatLetter(result.guessLetter);

		if (userGuess == 0) {
			if(self.guessedLetters.indexOf(result.guessLetter) < 0) {
				self.guessedLetters.push(result.guessLetter);
				self.remaining--;
				console.log('This letter is wrong!')
			}
			else {
				console.log("You've guessed that previously!");
			}
		} 
		else {
			if (self.guessedLetters.indexOf(result.guessLetter) < 0) { 
				self.guessedLetters.push(result.guessLetter);
				console.log("Correct!");
		}
		else{
			console.log('You already guessed that!');
		}
			if(self.current.guessedWord()){
				console.log('You won!');
				return;
			}
		}
	    console.log('Guesses remaining: ', self.remaining);
	    console.log(self.current.renderedWord());
	    console.log('Previously guessed: ' + self.guessedLetters);
		    if ((self.remaining > 0) && (self.current.found === false)){
		    	self.promptUser();
		    }
		    else if(self.remaining == 0){
		    	console.log('Game over. The word was:', self.current.word);
		}
		else{
			console.log(self.current.renderedWord());
		}

	})
}
}
game.start();