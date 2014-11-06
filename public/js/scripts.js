console.log(':)')

$(function(){	

	var currentImage = 1;
	var words = ['javascript', 'ruby', 'python'];
	var numRand = Math.floor(Math.random() * words.length);
	var letter = "";
	var solution = "";
	var turns = 7;

	$('.letters span').click(function(e){
		var letter = event.target.innerText;
		$(e.target).addClass('disable');
		$(e.target).unbind('click');
		$(e.target).hide("slow");
		$("#used").append(letter + ",");
	});

	function setup(theWord) {
		word = theWord.toUpperCase();
		remainingLetters = word;
		guess = word.replace(/./g, '_');
		$('#guess').text(guess);
	}//function setup

	function guessLetter(letter){
		var found = false;
		for (var i = 0; i < remainingLetters.length; i++){
			if (remainingLetters.CharAt(i) == letter){
				remainingLetters = remainingLetters.replaceAt(i,'_');
				guess = guess.replaceAt(i, letter);
				found = true; 
			}//loop
		}//if remaining letters
		if (found){
			$('attempt').text(attempt);
			if (attempt.indexOf('_')== -1) {
				alert('You Won!');
				location.reload();
			} //if statement
		}//if statement
			else {
			currentImage++;
			var imageId = 'hangman' + currentImage
			// $(imageId).fadeTo(200, 1.0. function(){
				if (currentImage == 7){
					$('#attempt').text(word)
					alert('You Lost!')
					location.reload()
				}//else
			// });//function
		}//guess letter function
	}	
}); //function