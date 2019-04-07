// Create the 'quotoes' array and assign sevelar quotes
// To exceed expactation: add an additional property 'category'
let quotes = [];
quotes = [
  {
    quote: 'One more thing...',
    source: 'Steve Jobs',
    category: 'business'
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
    source: 'Gautama Buddha',
    category: 'religion'
  },
  {
    quote: 'Think like a queen. A queen is not afraid to fail. Failure is another stepping-stone to greatness.',
    source: 'Oprah Winfrey',
    category: 'success'
  }
];


// To exceed expactation: create the 'colors' array to contain a series of background colors.
let colors = ['#36b55c', '#FB5012', '#3D348B', '#CBBAED', '#E9DF00', '#254E70'];


// Create `getRandomQuote` function to return a quote object from quotes array.
function getRandomQuote () {
  let randomQuote;
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}


// Create the `printQuote` function to return the HTML code that contains values of the quote object created by the function getRandomQuote.
// To exceed expactation: add a conditional statement to display 'category' property.
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
  if(randomeQuote.category){
    html += '<span class="category">' + randomeQuote.category + '</span>';
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}


//To exceed expactation: create the 'changeBgColor' function to change background color randomly.
function changeBgColor () {
  let bgColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = bgColor;
}


//Create the even listener to call the 'printQuote' function when clicking the "Show another quote" button in index.html.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//To exceed expactation: call the 'changeBgColor' function when clicking the "Show another quote" button in index.html.
document.getElementById('loadQuote').addEventListener("click", changeBgColor, false);

//To exceed expactation: add the 'setInterval' method to show a new quote every 10 seconds.
setInterval(function(){
  printQuote();
  changeBgColor();
}, 10000);