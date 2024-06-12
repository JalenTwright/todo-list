import './style.css'

const body = document.querySelector('body');

const projectList = []


const sidebarCreate = (()=> {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar-class");

    const header = document.createElement("div");
    header.classList.add("header-class");

    const task = document.createElement("div");
    task.classList.add("task-class");

    body.appendChild(header);
    body.appendChild(sidebar);
    body.appendChild(task);
    

    return {
        header,
        sidebar,
        task
    }

})();

const sidebarContainerCreate = (()=> {
    const sidebarTitle = document.createElement("h2");
    sidebarTitle.innerHTML = "Projects"

    const projectInsert = document.createElement("input");
    projectInsert.setAttribute("type", "text");
    projectInsert.classList.add("input-class");

    const projectButton = document.createElement("input");
    projectButton.setAttribute("type", "button");
    projectButton.classList.add("input-button");
    projectButton.setAttribute("value", "+");

    const projectContainter = document.createElement("div");
    projectContainter.classList.add("proj-container");
    
    sidebarCreate.sidebar.appendChild(sidebarTitle);
    sidebarCreate.sidebar.appendChild(projectButton);
    sidebarCreate.sidebar.appendChild(projectInsert);
    sidebarCreate.sidebar.appendChild(projectContainter);

    return {
        sidebarTitle,
        projectInsert,
        projectButton,
        projectContainter
    }

})();




class project {
    constructor(projectInsert) {
        this.projectInsert = projectInsert
    }
}

function projectTabs(projects) {
    sidebarContainerCreate.projectButton.addEventListener("click", () => {
        const projectInsertValue = sidebarContainerCreate.projectInsert.value;
        
        let projectAdd = new project (projectInsertValue);

        projectList.push(projectAdd);
        sidebarContainerCreate.projectInsert.value = " "

        const projectTitle = document.createElement("h2");
            projectTitle.classList.add("project-title");
            projectTitle.innerHTML = projectInsertValue;

            sidebarContainerCreate.projectContainter.appendChild(projectTitle);
    });
};

projectTabs();













//code for project tabs / sidebar
    //use HTML DOM Input Text Object
    //use a for each loop to create different tabs for project``````
    //add a button that deletes said project tab, also add a confirmation dialog popup with yes or no

//function projectTabs() {
//    sidebarContainerCreate.projectButton.addEventListener("click", () => {
//        let projectAdd = new project (projectInsert.value);

//        projectList.push(projectAdd);
//        sidebarContainerCreate.projectInsert.value = " "

//        projectList.forEach((projects)=> {
//            const projcontainter = document.createElement("div");
//            projcontainter.classList.add("proj-container");
//            projcontainter.innerHTML = projects.projectInsert

//            sidebarCreate.sidebar.appendChild(projcontainter);
            
//        })

        
//    });
//}

//projectTabs();

//console.log(projectList)
