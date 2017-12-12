var clicks           = 0;
//click counter variable
var compareURL       = "";
//1st FLIP Img Src URL to use as comparison w/ 2nd FLIP
var firstId          = "#";
//1st FLIP Element Id
var firstClass       = ".";
//keep count of how many moves the player has made
var runningMoveCount = 0;
//how many right answers the player has given in the current game
var winCount         = 0;
//when Win Count = 8, this will be set to true and will end the game

var theStart = new Date().getTime();

/*Start the timer when the first card flip is made ++++ I need to find out how to initialize
start variable without having it count up at same rate as setInterval.*/
var time = setInterval(function(){
	if(runningMoveCount >= 1){
	$('.timer').text(Math.floor((new Date - theStart)/ 1000) + " Seconds");
		}
//If player wins stop the timer.
	if(winCount === 8){
	clearInterval(time);
	}
	}, 1000);

/*Find the first card's Image URL, Id and ClassName. Add move to Star Count.*/
function firstClick(firstPick, flipClass){
	firstPick.addClass(flipClass).removeClass(firstPick);
	clicks     += 1;
	compareURL  = firstPick.css('content');
	firstId    += firstPick.attr('id');
	firstClass += firstPick.attr('class');
	starfunc(runningMoveCount);
	console.log("running");
}

/*Compare the first Card's URL to the second Card's URL. If match, correctAnimation(), if not wrongAnimation().*/
function secondClick(secCard, firId, sndFlipClass, firClass, cmprURL){
	secCard.addClass(sndFlipClass);
	if(secCard.css('content') === cmprURL){
		correctAnimation(secCard, firId, sndFlipClass, firClass);
	}else{
		wrongAnimation(secCard, firId, sndFlipClass, firClass);
	}
}

/*Animate correctly guessed cards. Reset modular variables. If player has won game, stop Timer.*/
function correctAnimation(correctGuess1, correctGuess2, scFlip, firFlip){
	correctGuess1.animate({
		opacity: 0.5
		}, 2000);
	correctGuess2.animate({
		opacity: 0.5
		}, 2000);
	firstId    = "#";
	firstClass = ".";
	winCount  += 1;
	if(winCount === 8){
		$( '#winningAlert' ).dialog({
			autoOpen: false,
		});
		$('#winningAlert').append($('.stars').contents())
		$('#winningAlert').dialog('open');
		console.log(clicks);
	}
}

/*Animate incorrectly guessed Cards and remove image Class to return to blue square.*/
function wrongAnimation(secondCard, firstCard, secondClassName, firstClassName){
	secondCard.addClass(secondClassName);
	setTimeout(function(){
		secondCard.effect("shake", {times:3}, 300);
	}, 300);
	setTimeout(function(){
		firstCard.effect("shake", {times:3}, 300);
	}, 300);
	setTimeout(function(){
		secondCard.removeClass(secondClassName);
	}, 900);
	setTimeout(function(){
		firstCard.removeClass(firstClassName);
	}, 900);
	firstId    = "#";
	firstClass = ".";
}

//Decrement Star count after 10, 11 and 12 moves. 
function starfunc(runMoveCount){
	if(runMoveCount > 8 && runMoveCount < 10){
		$('.timer').children().first().remove();
	}else if(runMoveCount >= 10 && runMoveCount < 11){
		$('.timer').children().first().remove();
	}else if(runMoveCount > 11){
		$('.timer').children().first().remove();
	}
}

	$(document).ready(function(){
		$('.lilSquare').click(function(){
			console.log("click func running");
				if(clicks === 0){
					$('p').text('Running move count:'+(runningMoveCount+=1));
					//check the Id of the clicked div
					switch($(this).attr('id')){
						case 'ls1':
						//Pass the current class and flip-card class to firstClick().
							firstClick($(this), "flipped1");
							break;
						case 'ls2':
							firstClick($(this), "flipped2");
							break;
						case 'ls3':
							firstClick($(this), "flipped3");
							break;
						case 'ls4':
							firstClick($(this), "flipped4");
							break;
						case 'ls5':
							firstClick($(this), "flipped5");
							break;
						case 'ls6':
							firstClick($(this), "flipped6");
							break;
						case 'ls7':
							firstClick($(this), "flipped7");
							break;
						case 'ls8':
							firstClick($(this), "flipped8");
							break;
						case 'ls9':
							firstClick($(this), "flipped9");
							break;
						case 'ls10':
							firstClick($(this), "flipped10");
							break;
						case 'ls11':
							firstClick($(this), "flipped11");
							break;
						case 'ls12':
							firstClick($(this), "flipped12");
							break;
						case 'ls13':
							firstClick($(this), "flipped13");
							break;
						case 'ls14':
							firstClick($(this), "flipped14");
							break;
						case 'ls15':
							firstClick($(this), "flipped15");
							break;
						case 'ls16':
							firstClick($(this), "flipped16");
							break;
					}
				}else if(clicks === 1){
					clicks = 0;
					switch($(this).attr('id')){
						case 'ls1':
							secondClick($(this), $(firstId), "flipped1", firstClass, compareURL);
							break;
						case 'ls2':
							secondClick($(this), $(firstId), "flipped2", firstClass, compareURL);
							break;
						case 'ls3':
							secondClick($(this), $(firstId), "flipped3", firstClass, compareURL);
							break;
						case 'ls4':
							secondClick($(this), $(firstId), "flipped4", firstClass, compareURL);
							break;
						case 'ls5':
							secondClick($(this), $(firstId), "flipped5", firstClass, compareURL);
							break;
						case 'ls6':
							secondClick($(this), $(firstId), "flipped6", firstClass, compareURL);
							break;
						case 'ls7':
							secondClick($(this), $(firstId), "flipped7", firstClass, compareURL);
							break;
						case 'ls8':
							secondClick($(this), $(firstId), "flipped8", firstClass, compareURL);
							break;
						case 'ls9':
							secondClick($(this), $(firstId), "flipped9", firstClass, compareURL);
							break;
						case 'ls10':
							secondClick($(this), $(firstId), "flipped10", firstClass, compareURL);
							break;
						case 'ls11':
							secondClick($(this), $(firstId), "flipped11", firstClass, compareURL);
							break;
						case 'ls12':
							secondClick($(this), $(firstId), "flipped12", firstClass, compareURL);
							break;
						case 'ls13':
							secondClick($(this), $(firstId), "flipped13", firstClass, compareURL);
							break;
						case 'ls14':
							secondClick($(this), $(firstId), "flipped14", firstClass, compareURL);
							break;
						case 'ls15':
							secondClick($(this), $(firstId), "flipped15", firstClass, compareURL);
							break;
						case 'ls16':
							secondClick($(this), $(firstId), "flipped16", firstClass, compareURL);
							break;
					}
				}
	});
		$("#playAgain").click(function shuffle(){
			var biggie = $(".bigSquare");
		    biggie.each(function(){
		        var divs = $(this).find('div');
		        for(var i = 0; i < divs.length; i++){
		        	$(divs[i]).remove();            
		        }
//the fisher yates algorithm, from http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
		        var i = divs.length;
		        if ( i == 0 ) return false;
		        while ( --i ) {
		           var j = Math.floor( Math.random() * ( i + 1 ) );
		           var tempi = divs[i];
		           var tempj = divs[j];
		           divs[i] = tempj;
		           divs[j] = tempi;
		         }
		         /*Randomly append divs, reanimate original class to be regularly lit.*/
		        for(var i = 0; i < divs.length; i++){
		        	$(divs[i]).appendTo(this);
		        	$(divs[i]).removeClass();
		        	$(divs[i]).addClass("lilSquare");
		        	$(divs[i]).animate({
						opacity: 1
						}, 2000);
		        }
		        //remove dialog box.
		        	$('#winningAlert').remove();
		        	runningMoveCount = 0;
		        	winCount = 0;
						        
		    });                   
		});

});
