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

    var cocktailIngr1 = data.drinks[0].strIngredient1;
    var cocktailIngr2 = data.drinks[0].strIngredient2;
    var cocktailIngr3 = data.drinks[0].strIngredient3;
    var cocktailIngr4 = data.drinks[0].strIngredient4;    

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

    cocktailDisplayIngr.appendChild(ingredientList)   
    }
  })

}

// function displayDrink() {
//     // === Displaying Cocktail ===

//     var cocktailImg = data.drinks[0].strDrinkThumb;
//     cocktailDisplayImg.setAttribute("src", cocktailImg);

//     var cocktailName = data.drinks[0].strDrink;
     
//     cocktailDisplayName.textContent = cocktailName

//     var drinkDesc = data.drinks[0].strInstructions;
//     cocktailDisplayDesc.textContent = drinkDesc

//     // === Ingredient List === 
//     //to be looped?

//     var cocktailIngr1 = data.drinks[0].strIngredient1;
//     var cocktailIngr2 = data.drinks[0].strIngredient2;
//     var cocktailIngr3 = data.drinks[0].strIngredient3;
//     var cocktailIngr4 = data.drinks[0].strIngredient4;    

//     var addIngredient1 = document.createElement("li")
//     addIngredient1.textContent = cocktailIngr1
//     ingredientList.appendChild(addIngredient1)

//     var addIngredient2 = document.createElement("li")
//     addIngredient2.textContent = cocktailIngr2
//     ingredientList.appendChild(addIngredient2)

//     var addIngredient3 = document.createElement("li")
//     addIngredient3.textContent = cocktailIngr3
//     ingredientList.appendChild(addIngredient3)

//     var addIngredient4 = document.createElement("li")
//     addIngredient4.textContent = cocktailIngr4
//     ingredientList.appendChild(addIngredient4)

//     cocktailDisplayIngr.appendChild(ingredientList)   
// }

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

