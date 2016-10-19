// property to store the actual letter	

// property/boolean if the letter can be shown 

// export to use in word.js

var Letter = function(letterFunction) {
	this.char = letterFunction.toLowerCase(),
	this.appear = false,
	this.letterRender = function() {
		if (this.appear) {
			return this.char;
		}
		else if (this.char === " ") {
			this.appear = true;
			return this.char;
		}
		else {
			return " - ";
		};
	};
};
exports.Letter = Letter;