var resultTitleEl = document.querySelector('#result-title')
var resultContentEl = document.querySelector('#result-content')

//Get results from generation page.  How to listen to event listener from "save recipe button?"
document.getElementById("cocktail-result").innerHTML=localStorage.getItem("favorite");
console.log("hello")

//Create and append new result card to unordered list. Focus on title-only first.  

// function seeFavorites() {

//     var resultCardContainer = document.createElement('div')
//     resultCardContainer.classList.add()
    
//     var resultCardBody = document.createElement('div')
//     resultCardBody.classList.add()
    
//     var titleEl = document.createElement('h2')
//     resultCardBody.classList.add()
//     titleEl.textContent = resultObj.titleEl
// }

// var linkButtonEl = document.createElement('a')
// linkButtonEl.textContent = 'See Full Details';

// var bodyContentEl = document.createElement('p');
// bodyContentEl.innerHTML = ;

// var cocktailDisplayImg = document.createElement('img');
// cocktailImg.setAttribute("src", cocktailImg)