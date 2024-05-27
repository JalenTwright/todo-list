import './style.css'
const body = document.querySelector('body');
//just to check and see if file worked
function content() {
    const hello = document.createElement("div");
    hello.classList.add("title");
    hello.innerHTML = "Hello";

    body.appendChild(hello);
};
content();

//code for project tabs / sidebar
    //use HTML DOM Input Text Object
    //use a for each loop to create different tabs for project``````
    //add a button that deletes said project tab, also add a confirmation dialog popup with yes or no


