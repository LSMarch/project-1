var dbApiKey = 9973533
var callDB = "www.thecocktaildb.com/api/json/v1/" + dbApiKey + "/randomselection.php"
//

var amWatchKey = 'ANbHpQNookLPNxvDnQ6YOC2qE8wYYRrDNj5YbkE3'
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