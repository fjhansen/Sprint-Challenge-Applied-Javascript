/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let carouselHeader = document.querySelector('.carousel-container')


imgArray = [];


function carouselMaker() {

  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let div3 = document.createElement('div');
  let img1 = document.createElement('img');
  let img2 = document.createElement('img');
  let img3 = document.createElement('img');
  let img4 = document.createElement('img');

  // Classes
  div1.classList.add("carousel");
  div2.classList.add("left-button");
  div3.classList.add("right-button");




  // Text
  div2.textContent = "<";
  div3.textContent = ">";

  img1.src = "assets/carousel/mountains.jpeg";
  img2.src = "assets/carousel/computer.jpeg";
  img3.src = "assets/carousel/trees.jpeg";
  img4.src = "assets/carousel/turntable.jpeg";

  // Append
  carouselHeader.appendChild(div1);
  div1.appendChild(div2);
  div1.appendChild(img1);
  div1.appendChild(img2);
  div1.appendChild(img3);
  div1.appendChild(img4);
  div1.appendChild(div3);

  // Return
  //console.log(carouselHeader)
  return div1;
}

carouselMaker();