// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


let header = document.querySelector(".header-container")

function Header() {

    let div1 = document.createElement('div');
    let span1 = document.createElement('span');
    let h1 = document.createElement('h1');
    let span2 = document.createElement('span');

    // Class

    div1.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    // Text

    span1.textContent = "MARCH 28, 2019";
    h1.textContent = "Lambda Times";
    span2.textContent = "98°";

    // Append

    header.appendChild(div1);
    div1.appendChild(span1);
    div1.appendChild(h1);
    div1.appendChild(span2);


    // Return

    console.log(div1);
    return div1
}

Header();