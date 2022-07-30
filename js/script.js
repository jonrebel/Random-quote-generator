/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {quote:'The journey of a thousand miles begins with one step.', source:'Lao Tzu', citation:'Dao De Jing', year:'2001'},
  {quote:'That which does not kill us makes us stronger.', source:'Friedrich Nietzsche'},
  {quote:'Life is what happens when youre busy making other plans.', source:'John Lennon'},
  {quote:'When the going gets tough, the tough get going."', source:'Joe Kennedy'},
  {quote:'You must be the change you wish to see in the world.', source:'Mahatma Gandhi'},
  {quote:'You only live once, but if you do it right, once is enough.', source:'Mae West'},
  {quote:'Tough times never last but tough people do.', source:'Robert H. Schuller'}
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  for(let i = 0; i < quotes.length;i++){
    let pointer = Math.floor(Math.random()*7);
    let quote = quotes[pointer];
    return quote;
  }
}


/***
 * `printQuote` function
***/
function printQuote(){
  let ranQ = getRandomQuote();
  //this inputs the code to display quotes into the tag with the id quote-box and it inherits the styless applied//
  document.getElementById('quote-box').innerHTML =`
  <p class="quote">${ranQ.quote}</p>
  <p class="source">${ranQ.source}<span class="citation">${ranQ.citation}</span><span class="year">${ranQ.year}</span></p>`
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);