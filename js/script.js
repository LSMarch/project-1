
// === Randomizer buttons and event listeners ===
var cocktailBtn = document.getElementById("cocktail-gen");
var movieBtn = document.getElementById("movie-gen");
var saveDrinkBtn = document.getElementById("save-cocktail")
var newDrinkBtn = document.getElementById("new-cocktail")


document.getElementById("cocktail-gen").addEventListener("click", fetchCocktail);
document.getElementById("movie-gen").addEventListener("click", fetchJoke);
newDrinkBtn.addEventListener("click", fetchCocktail)
saveDrinkBtn.addEventListener("click", saveCocktail)
// === Drink variables ===
var cocktailImg
var cocktailName
var drinkDesc
var cocktailIngr1
var cocktailIngr2
var cocktailIngr3
var cocktailIngr4
var cocktailIngr5
var cocktailIngr6
var cocktailIngr7
var favedDrinks = JSON.parse(localStorage.getItem("favorite")) || []

var cocktailDisplayImg = document.getElementById("cocktail-img");
var cocktailDisplayName = document.getElementById("cocktail-name");
var cocktailDisplayIngr = document.getElementById("main-ingredients");
var cocktailDisplayDesc = document.getElementById("cocktail-description");
var ingredientList = document.createElement("ul");
var newCocktail = document.getElementById("new-cocktail");
var favDrinkBtn = document.getElementById("save-cocktail")
var newDrinkBtn = document.getElementById("new-cocktail")
//API Keys & Calls
var dbApiKey = 9973533
var callDB = "www.thecocktaildb.com/api/json/v1/" + dbApiKey + "/randomselection.php"

console.log(callDB.valueOf)

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
    }) // end first .then
    .then(data => {
      console.log(data);
      displayDrink();    

      // var cocktailImg
      // var cocktailName
      // var drinkDesc
      // var favedDrinks = JSON.parse(localStorage.getItem("favorite")) || []

      // === Displaying Cocktail ===

      function displayDrink() {        

        cocktailImg = data.drinks[0].strDrinkThumb;
        cocktailDisplayImg.setAttribute("src", cocktailImg);

        cocktailName = data.drinks[0].strDrink;

        cocktailDisplayName.textContent = cocktailName

        drinkDesc = data.drinks[0].strInstructions;
        cocktailDisplayDesc.textContent = drinkDesc

        // === Ingredient List === 
        //to be looped?
        ingredientList.setAttribute("id", "ingredient-list")
        while (ingredientList.firstChild) {
          ingredientList.removeChild(ingredientList.firstChild)
        }

        cocktailIngr1 = data.drinks[0].strIngredient1;
        cocktailIngr2 = data.drinks[0].strIngredient2;
        cocktailIngr3 = data.drinks[0].strIngredient3;
        cocktailIngr4 = data.drinks[0].strIngredient4;
        cocktailIngr5 = data.drinks[0].strIngredient5;
        cocktailIngr6 = data.drinks[0].strIngredient6;
        cocktailIngr7 = data.drinks[0].strIngredient7;

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
        
        // // === Saved drinks to local storage === 

        // favDrinkBtn.addEventListener("click", saveDrink())
        // function saveDrink() {
        // favedDrinks = JSON.parse(localStorage.getItem("favorite")) || []
        // favedDrinks.push(cocktailName)
        // localStorage.setItem("favorite", JSON.stringify(favedDrinks))
        // //console.log(favedDrinks)

        // for(var i=0; i< favedDrinks.length; i++){

        } // end saveDrink
        


      


        
      
     
    })// end second .then
} //end fetchCocktail

function saveCocktail() {

  // === Saved drinks to local storage ===  
  
  favedDrinks = JSON.parse(localStorage.getItem("favorite")) || []
  favedDrinks.push(cocktailName)
  localStorage.setItem("favorite", JSON.stringify(favedDrinks))
  console.log(favedDrinks)
 

} // end saveCocktail

function fetchJoke() {
  console.log("movie generator triggered")
}

// === API Keys & Calls ===

var dadJokeSetup = document.getElementById('dad-joke-setup')
var dadJokePunchline = document.getElementById('dad-joke-punchline')
var moreJokes = document.getElementById('more-jokes')

moreJokes.addEventListener('click', fetchJoke)

function fetchJoke() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
      'X-RapidAPI-Key': 'f7e3db9b17mshb7798039f3f02b1p1671e1jsn5dd40883da0c'
      // Andrew's api key for dad jokes
      // '67d5c72463mshc1dd978ceca0b53p17acdfjsn858a474aa071'
      // Libby's api key for dad jokes
      // 'f7e3db9b17mshb7798039f3f02b1p1671e1jsn5dd40883da0c'
    }
  };
  console.log("joke generator triggered")
  fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
    .then(response => response.json())
    .then(function (response) {
      dadJokeSetup.textContent = response.body[0].setup
      dadJokePunchline.textContent = response.body[0].punchline
    })
}
