var yourWins = 0;
var yourLosses = 0;
var addition = 0;
var guess = Math.floor(Math.random() * 100 + 19);


var red = Math.floor(Math.random() * 12 + 1);
var blue = Math.floor(Math.random() * 12 + 1);
var green = Math.floor(Math.random() * 12 + 1);
var yellow = Math.floor(Math.random() * 12 + 1);



var updateScore = function() {
	$(".addition").empty();
	$(".addition").append(addition);

	$("#yourWins").empty();
	$("#yourWins").append(yourWins);

	$("#yourLosses").empty();
	$("#yourLosses").append(yourLosses);


}

var newGame = function () {
	addition = 0;
	guess = Math.floor(Math.random() * 100 + 19);

	$(".guess").empty();
	$(".guess").append(guess);

	red = Math.floor(Math.random() * 12 + 1);
	blue = Math.floor(Math.random() * 12 + 1);
	green = Math.floor(Math.random() * 12 + 1);
	yellow = Math.floor(Math.random() * 12 + 1);

	updateScore();
}

var game = function() {
	$(".guess").html(guess);
	if (addition === guess) {
		yourWins = yourWins + 1;
		newGame();
	}
	else if (addition > guess) {
		yourLosses = yourLosses + 1;
		newGame();
	}
	else{
		updateScore();
	}
}

$(".guess").append(guess);
$(".addition").append(addition);

$( document ).ready(function() {
	$("#red").click(function(){
		addition = addition + red;
		game();
	})

	$("#blue").click(function() {
		addition = addition + blue;
		game();
	})

	$("#green").click(function() {
		addition = addition + green;
		game();
	})

	$("#yellow").click(function() {
		addition = addition + green;
		game();
	})

});
