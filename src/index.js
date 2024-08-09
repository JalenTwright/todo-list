import './style.css';

const body = document.querySelector('body');
const dialog = document.getElementById("dialog");
const exitButton = document.getElementById("exit-button")
let title = document.getElementById('title');
let date = document.getElementById("date");
let description = document.getElementById("description");
const submitButton = document.getElementById("submit-button");

const projectList = ["Default"];

const sidebarCreate = (() => {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar-class");

    const header = document.createElement("div");
    header.classList.add("header-class");

    const headerTitle = document.createElement("h1");
    headerTitle.classList.add("header-title");
    headerTitle.innerHTML = "Default";

    const task = document.createElement("div");
    task.classList.add("task-class");

    const taskControls = document.createElement("div");
    taskControls.classList.add("task-controls");

    header.appendChild(headerTitle);
    body.appendChild(header);
    body.appendChild(sidebar);
    task.appendChild(taskControls);
    body.appendChild(task);

    return {
        header,
        headerTitle,
        sidebar,
        task,
        taskControls
    };
})();

const sidebarContainerCreate = (() => {
    const sidebarTitle = document.createElement("h2");
    sidebarTitle.innerHTML = "Projects";

    const projectInsert = document.createElement("input");
    projectInsert.setAttribute("type", "text");
    projectInsert.classList.add("input-class");

    const projectButton = document.createElement("input");
    projectButton.setAttribute("type", "button");
    projectButton.classList.add("input-button");
    projectButton.setAttribute("value", "+");

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("proj-container");

    sidebarCreate.sidebar.appendChild(sidebarTitle);
    sidebarCreate.sidebar.appendChild(projectInsert);
    sidebarCreate.sidebar.appendChild(projectButton);
    sidebarCreate.sidebar.appendChild(projectContainer);

    return {
        sidebarTitle,
        projectInsert,
        projectButton,
        projectContainer
    };
})();

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
}

class Task {
    constructor(title, date, description ) {
        this.title = title;
        this.date = date;
        this.description = description;
    }
}

const createTaskElement = (projectName) => {
    const projectTitle = document.createElement("h2");
    projectTitle.classList.add("project-title");
    projectTitle.innerHTML = projectName;

    sidebarContainerCreate.projectContainer.appendChild(projectTitle);

    return {
        projectTitle
    };
};

let activeProject = null;

const displayProject = (project) => {
    activeProject = project;
    const { task, taskControls, headerTitle } = sidebarCreate;

    task.innerHTML = ''; 
    headerTitle.innerHTML = project.name;

    // Clear task controls
    while (taskControls.firstChild) {
        taskControls.removeChild(taskControls.firstChild);
    }

    // Add delete and add task buttons
    const deleteButton = document.createElement('div');
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "Delete Project";

    const taskButton = document.createElement("div");
    taskButton.classList.add("task-button");
    taskButton.innerHTML = "Add Task";

    taskControls.appendChild(deleteButton);
    taskControls.appendChild(taskButton);
    task.appendChild(taskControls);

    // Display tasks
    const taskList = document.createElement("div");
    taskList.classList.add("task-list");

    project.tasks.forEach(taskItem => {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-item");
        taskList.appendChild(taskContainer);

        const taskName = document.createElement("div");
        taskName.classList.add("task-name");
        taskName.innerHTML = taskItem.title;
        taskContainer.appendChild(taskName);

        const taskDate = document.createElement("div");
        taskDate.classList.add("task-date");
        taskDate.innerHTML = taskItem.date;
        taskContainer.appendChild(taskDate);

        const taskDesc = document.createElement("div");
        taskDesc.classList.add("task-desc");
        taskDesc.innerHTML = taskItem.description;
        taskContainer.appendChild(taskDesc);
    });
    task.appendChild(taskList);

    // Attach event listeners for buttons
    deleteButton.addEventListener('click', () => {
        deleteProject(project, project.projectTitle);
    });

    taskButton.addEventListener('click', () => {
        dialog.showModal();
    });
};

// Ensure this event listener is only attached once globally
submitButton.addEventListener('click', () => {
    if (activeProject) {
        addTask(activeProject);
        dialog.close();
    }
});

const addProject = () => {
    const projectName = sidebarContainerCreate.projectInsert.value.trim();
    if (projectName === '') return;

    // Check if the project already exists
    const existingProject = projectList.find(proj => proj.name === projectName);
    if (existingProject) {
        alert('Project with this name already exists!');
        return;
    }

    const newProject = new Project(projectName);
    projectList.push(newProject);

    const projectElements = createTaskElement(projectName);

    projectElements.projectTitle.addEventListener('click', () => {
        displayProject(newProject);
    });

    sidebarContainerCreate.projectInsert.value = ''; 
};

const deleteProject = (project, projectTitleElement) => {
    const index = projectList.indexOf(project);
    if (index > -1) {
        projectList.splice(index, 1);
    }
    sidebarContainerCreate.projectContainer.removeChild(projectTitleElement);
    sidebarCreate.task.innerHTML = '';  
    sidebarCreate.taskControls.innerHTML = '';  
    sidebarCreate.headerTitle.innerHTML = 'Welcome'; 
};

const addTask = (project) => {
    let taskItem = new Task(title.value, date.value, description.value);
    project.tasks.push(taskItem);  // Add the task to the current active project
    displayProject(project);  // Re-render the project to display the new task
};

const renderProjects = () => {
    projectList.forEach(projectName => {
        const projectElements = createTaskElement(projectName);

        const project = new Project(projectName);

        projectElements.projectTitle.addEventListener('click', () => {
            displayProject(project);
        });
    });
};

sidebarContainerCreate.projectButton.addEventListener("click", addProject);

renderProjects();
