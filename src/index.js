import './style.css'
const body = document.querySelector('body');

const projectList = []


const sidebarCreate = (()=> {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar-class");

    body.appendChild(sidebar);

    return {
        sidebar
    }

})();

const sidebarContainerCreate = (()=> {
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

let projectInsert = sidebarContainerCreate.projectInsert



class project {
    constructor(projectInsert) {
        this.projectInsert = projectInsert
    }
}

function projectTabs() {
    sidebarContainerCreate.projectButton.addEventListener("click", () => {
        //const projectInsertValue  = sidebarContainerCreate.projectInsert.value;
        let projectAdd = new project (projectInsert.value);

        projectList.push(projectAdd);
        sidebarContainerCreate.projectInsert.value = " "

        
    });
}

projectTabs();

console.log(projectList)









//code for project tabs / sidebar
    //use HTML DOM Input Text Object
    //use a for each loop to create different tabs for project``````
    //add a button that deletes said project tab, also add a confirmation dialog popup with yes or no


