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
	quote: '"Be as you wish to seem."',
	author: 'Socrates'
},


{
	quote: '"Education is the most powerful weapon wich you can use to change the world."',
	author: 'Nelson Mandela'

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

{
	quote:'"All cruelty springs from weakness."',
	author:'Seneca'
},

{
	quote:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."',
	author: 'George Orwell'
},

{
	quote: '"Pleasure in the job puts perfection in the work."',
	author: 'Aristotle'
},

{
	quote: '"It is not for me to judge another man life. I must judge, I must choose, I must spurn, purely for myself. For myself, alone."',
	author: 'Hermann Hesse'
}






]; // end myquotes 

var myQuote;


// function for randomly displaying quotes 

$('#button').click(function() {

 myQuote = myQuotes[Math.floor(Math.random() * myQuotes.length)];

 $('#container').html(myQuote.quote+" <br> -"+myQuote.author).hide().fadeIn(300);


});

// Share on Twitter button

$('#tweet').on('click', function(){
	window.open("https://twitter.com/intent/tweet?text="+myQuote.quote);
});



// hover effects for the two buttons
$('#button').hover(function() {
	$(this).toggleClass('getBig');
});


$('#tweet').hover(function() {
	$(this).toggleClass('getBigTwo');
});




























}); // end document ready function 


