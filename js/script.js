//Randomizer buttons and event listeners
var cocktailBtn = document.getElementById("cocktail-gen");
var jokeBtn = document.getElementById("movie-gen");

document.getElementById("cocktail-gen").addEventListener("click", fetchCocktail);
document.getElementById("movie-gen").addEventListener("click", fetchJoke);

//Button Functions
function fetchCocktail() {
  console.log("cocktail generator triggered")
}

var jokeDisplay = document.querySelector('#movie-description')

function fetchJoke() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
      'X-RapidAPI-Key': '67d5c72463mshc1dd978ceca0b53p17acdfjsn858a474aa071'
    }
  };
  console.log("joke generator triggered")
  fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then(response => console.log(response))
  .then(response => jokeDisplay.innerHTML = response.body) 
	.catch(err => console.error(err));
}

//API Keys & Calls
var dbApiKey = 9973533
var callDB = "www.thecocktaildb.com/api/json/v1/" + dbApiKey + "/randomselection.php"

var amWatchKey = ''
var slWatchKey =  'WTCefWtdN1yKksMEQG3nGCRMejYFmVCTgjYgTwlM'
var lmWatchKey = 'fZIKpNDup738VAfjCOX9c80qvmUAQ9w46LmH8qGn'

console.log("work")
console.log(callDB.valueOf)
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    // displayCocktail(data)
  })
  // SITE I USED TO FIND FUNCTIONAL
// https://w3collective.com/fetch-display-api-data-javascript/