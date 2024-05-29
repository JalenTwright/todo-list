import './style.css'
const body = document.querySelector('body');

const project = []


const sidebarCreate = (()=> {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar-class");

    body.appendChild(sidebar);

    return {
        sidebar
    }

})();

const inputCreate = (()=> {
    const projectInsert = document.createElement("input");
    projectInsert.setAttribute("type", "text");
    projectInsert.classList.add("input-class");

    const projectButton = document.createElement("input");
    projectButton.setAttribute("type", "button");
    projectButton.classList.add("input-button");
    projectButton.setAttribute("value", "+");
    
    sidebarCreate.sidebar.appendChild(projectButton);
    sidebarCreate.sidebar.appendChild(projectInsert);

    return {
        projectInsert,
        projectButton
    }

})();







//code for project tabs / sidebar
    //use HTML DOM Input Text Object
    //use a for each loop to create different tabs for project``````
    //add a button that deletes said project tab, also add a confirmation dialog popup with yes or no


