import './style.css'
const body = document.querySelector('body');


const sidebarCreate = (()=> {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar-class");

    body.appendChild(sidebar);
})();

sidebarCreate

export {sidebarCreate}



//code for project tabs / sidebar
    //use HTML DOM Input Text Object
    //use a for each loop to create different tabs for project``````
    //add a button that deletes said project tab, also add a confirmation dialog popup with yes or no


