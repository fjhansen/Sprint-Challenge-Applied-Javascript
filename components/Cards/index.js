// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsContainer = document.querySelector('.cards-container')
let two = "https://lambda-times-backend.herokuapp.com/articles"

axios
.get(two)
.then(response => {
    response.data.articles.javascript.forEach(item => {
        
        let javascript = cardMaker(item)
        cardsContainer.appendChild(javascript);
})
})
.catch(error => console.error(`Error: ${error}`))

function cardMaker(obj) {
    
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let img1 = document.createElement('img');
    let span = document.createElement('span');
    
    // Class
    div1.classList.add('card');
    div2.classList.add('headline');
    // Text
    div2.textContent = obj.headline;
    img1.src = obj.authorPhoto;

    // Append
    cardsContainer.appendChild(div1);
    div1.appendChild(div2);
    // Return
}