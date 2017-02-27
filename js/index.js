$(document).ready(function() {
    

// my quotes 

var myQuotes = [

{
	quote: '"Education is like downloading data and algorithms into your brain."',
	author: 'Elon Musk'
},

{
	quote: '"If you can explain the why of things, then that makes a huge difference to people’s motivation. Then they understand purpose."',
	author: 'Elon Musk'
},

{
	quote: '"Starting a company is like starting into the abyss and eating glass."',
	author: 'Elon Musk'
},

{
	quote: '"If something is important enough, even if the odds are against you, you should still do it."',
	author: 'Elon Musk'
},


{
	quote:'"Teachers open the door. You enter by yourself."',
	author: 'Chinese Proverb'
},

{
	quote: '"If we Encounter a man of rare intellect, we should ask him what books he reads."',
	author: 'Ralph Waldo Emerson'	
},


{
	quote: '"Strenght does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength."',
	author: 'Arnold Schwarzenegger'
},


{
	quote: '"For me life is continuosly being hungry. The meaning of life is not simply to exist, to survive, but to move ahed, to go up, to achieve, to conquer."',
	author: 'Arnold Schwarzenegger'

}, 

{
	quote:'"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth."',
	author: 'Marcus Aurelius'
},

{
	quote: '"Waste no more time arguing about what a good man should be. Be one."',
	author: 'Marcus Aurelius'
},

{
	quote: '"You have power over your mind - not outside events. Realize this, and you will find strenght."',
	author: 'Marcus Aurelius'
}, 






]; // end myquotes 



// function for randomly displaying quotes 

$('#button').click(function() {

var myQuote = myQuotes[Math.floor(Math.random() * myQuotes.length)];

$('#container').html(myQuote.quote+" <br> -"+myQuote.author);


});





























}); // end document ready function 


