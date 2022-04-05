// === Randomizer buttons and event listeners ===
var cocktailBtn = document.getElementById("cocktail-gen");
var movieBtn = document.getElementById("movie-gen");

document.getElementById("cocktail-gen").addEventListener("click", fetchCocktail);
document.getElementById("movie-gen").addEventListener("click", fetchMovie);

// === Drink variables ===

var cocktailDisplayImg = document.getElementById("cocktail-img");
var cocktailDisplayName = document.getElementById("cocktail-name");
var cocktailDisplayIngr = document.getElementById("main-ingredients")
var cocktailDisplayDesc = document.getElementById("cocktail-description")
var ingredientList = document.createElement("ul")


// === Button Functions === 
function fetchCocktail() {
  console.log("cocktail generator triggered")
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
    displayDrink();

    // === Displaying Cocktail ===

    function displayDrink() {
    var cocktailImg = data.drinks[0].strDrinkThumb;
    cocktailDisplayImg.setAttribute("src", cocktailImg);

    var cocktailName = data.drinks[0].strDrink;
     
    cocktailDisplayName.textContent = cocktailName

    var drinkDesc = data.drinks[0].strInstructions;
    cocktailDisplayDesc.textContent = drinkDesc

    // === Ingredient List === 
    //to be looped?
    ingredientList.setAttribute("id", "ingredient-list")
    while(ingredientList.firstChild){
      ingredientList.removeChild(ingredientList.firstChild)
    }

    var cocktailIngr1 = data.drinks[0].strIngredient1;
    var cocktailIngr2 = data.drinks[0].strIngredient2;
    var cocktailIngr3 = data.drinks[0].strIngredient3;
    var cocktailIngr4 = data.drinks[0].strIngredient4;    
    var cocktailIngr5 = data.drinks[0].strIngredient5; 
    var cocktailIngr6 = data.drinks[0].strIngredient6;
    var cocktailIngr7 = data.drinks[0].strIngredient7;  

    var addIngredient1 = document.createElement("li")
    addIngredient1.textContent = cocktailIngr1
    ingredientList.appendChild(addIngredient1)

    var addIngredient2 = document.createElement("li")
    addIngredient2.textContent = cocktailIngr2
    ingredientList.appendChild(addIngredient2)

    var addIngredient3 = document.createElement("li")
    addIngredient3.textContent = cocktailIngr3
    ingredientList.appendChild(addIngredient3)

    var addIngredient4 = document.createElement("li")
    addIngredient4.textContent = cocktailIngr4
    ingredientList.appendChild(addIngredient4)

    var addIngredient5 = document.createElement("li")
    addIngredient5.textContent = cocktailIngr5
    ingredientList.appendChild(addIngredient5)

    var addIngredient6 = document.createElement("li")
    addIngredient6.textContent = cocktailIngr6
    ingredientList.appendChild(addIngredient6)

    var addIngredient7 = document.createElement("li")
    addIngredient7.textContent = cocktailIngr7
    ingredientList.appendChild(addIngredient7)

    cocktailDisplayIngr.appendChild(ingredientList)   
    }
  })

}

function fetchMovie() {
  console.log("movie generator triggered")
}

// === API Keys & Calls ===

var dbApiKey = 9973533
var callDB = "www.thecocktaildb.com/api/json/v1/" + dbApiKey + "/randomselection.php"

var amWatchKey = 'ANbHpQNookLPNxvDnQ6YOC2qE8wYYRrDNj5YbkE3'
var slWatchKey =  'WTCefWtdN1yKksMEQG3nGCRMejYFmVCTgjYgTwlM'
var lmWatchKey = 'fZIKpNDup738VAfjCOX9c80qvmUAQ9w46LmH8qGn'

  // === SITE I USED TO FIND FUNCTIONAL ===
// https://w3collective.com/fetch-display-api-data-javascript/

