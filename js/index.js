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

{
	quote:'"All cruelty springs from weakness."',
	author:'Seneca'
},

{
	quote:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."',
	author: 'George Orwell'
},

{
	quote: '"Wisdom cannot be imparted. Wisdom that a wise man attempts to impart always sounds like foolishness to someone else ... Knowledge can be communicated, but not wisdom. One can find it, live it, do wonders through it, but one cannot communicate and teach it."',
	author: 'Hermann Hesse'
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

$('#container').html(myQuote.quote+" <br> -"+myQuote.author);


});

// Share on Twitter button

$('#tweet').on('click', function(){
	window.open("https://twitter.com/intent/tweet?text="+myQuote.quote);

	
 
    
});
































}); // end document ready function 


