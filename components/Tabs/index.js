// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector('.topics')
let one = "https://lambda-times-backend.herokuapp.com/topics"

axios
.get(one)
.then(response => {
    //console.log(response.data);
        response.data.topics.forEach(item => {

        let topic = Tabs(item)
        topics.appendChild(topic);
    })

})
.catch(error => console.error(`Error: ${error}`))

function Tabs(data) {
    let div1 = document.createElement('div');

    div1.classList.add('tab')
    div1.textContent = `${data}`;

    return div1
}