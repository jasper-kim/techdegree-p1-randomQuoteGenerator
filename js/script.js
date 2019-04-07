/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [];
quotes = [
  {
    quote: 'One more thing...',
    source: 'Steve Jobs'
  },
  {
    quote: 'May the Force be with you.',
    source: 'Star Wars',
    citation: 'Movie',
    year: 1977
  },
  {
    quote: 'You never really understand a person until you consider things from his point of view … Until you climb inside of his skin and walk around in it.',
    source: 'To Kill a Mockingbird by Harper Lee',
    citation: 'Book',
    year: 1960
  },
  {
    quote: 'We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.',
    source: 'Gautama Buddha'
  },
  {
    quote: 'Think like a queen. A queen is not afraid to fail. Failure is another stepping-stone to greatness.',
    source: 'Oprah Winfrey'
  }
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote () {
  let randomQuote;
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote () {
  let randomeQuote = getRandomQuote();
  let html = '';
  html += '<p class="quote">' + randomeQuote.quote + '</p>';
  html += '<p class="source">' + randomeQuote.source;
  if(randomeQuote.citation){
    html += '<span class="citation">' + randomeQuote.citation + '</span>';
  } 
  if(randomeQuote.year){
    html += '<span class="year">' + randomeQuote.year + '</span>';
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.