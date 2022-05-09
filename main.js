// fetch("https://randomuser.me/api/")
//  .then(function(resp){
//      //do this when the results come back
//      console.log("Processing fetch results");
 
//      //now have to extract the data from the json
//      return resp.json();
//  })
//  .then(result => console.log(result))
//  .then(function(json){
//      //do something with the json payload
//      console.log("The json payload is ", json);
//      console.log("name", json.results[0].name.first, json.results[0].name.last);
//  })
let arrayUserData = [];
 const fetchUser = () => {
    fetch(`https://randomuser.me/api`)
    .then( (response) => response.json())
    .then( (json) => arrayUserData = json)
    console.log("fetching")
}




// Create a function that takes array data ands prints to the document
const showUser = () => {
    // Create a variable that holds array name. !!!!!!
    let firstName = arrayUserData.results[0].name.first
    // create a variable that holds target id for new data
    let fillDest = document.getElementById("newUser")
    // create an element that will be inserted in target id
    let element = document.createElement("li")
    // assign data to a variable
    let text = document.createTextNode(`${firstName} ${arrayUserData.results[0].name.last}`)
    // insert variable into element
    element.appendChild(text)
    // insert element into target id
    fillDest.appendChild(element)

}
const populateAge = () => {

    // Create a variable that holds array name. !!!!!!
    let newAge = arrayUserData.results[0].dob.age
    // create a variable that holds target id for new data
    let fillDest = document.getElementById("newAge")
    // create an element that will be inserted in target id
    let element = document.createElement("li")
    // assign data to a variable
    let text = document.createTextNode(newAge)
    // insert variable into element
    element.appendChild(text)
    // insert element into target id
    fillDest.appendChild(element)

}

// Create a function that will fetch a random user
// and print their name to the index.html.
// Create a function that will fetcha random user 
// and print their DoB to the screen.
