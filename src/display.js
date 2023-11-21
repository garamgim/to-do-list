import Icon from './img/icon.svg'
import { format } from 'date-fns'
import { Todo, projectManager } from './objects.js'



const createHeader = (() => {

    const header = document.createElement("header");

    // Create logo on header
    const logoDiv = document.createElement("div");
    logoDiv.id = "logo-div";

    const icon = new Image();
    icon.src = Icon;
    icon.id = "icon";

    const headerTitle = document.createElement("p");
    headerTitle.innerHTML = "To-do List";
    headerTitle.id = "header-title";

    logoDiv.appendChild(icon);
    logoDiv.appendChild(headerTitle);

    // Create add button on header
    const addTaskHeaderButton = document.createElement("button");
    addTaskHeaderButton.className = "add-button";
    addTaskHeaderButton.id = "add-task-header";
    addTaskHeaderButton.innerText = "+"

    header.appendChild(logoDiv);
    header.appendChild(addTaskHeaderButton);

    return { header }

})();



const createMain = (() => {

    const main = document.createElement("main");

    // Menu board (left wing, sorting tasks)
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu-div";
    main.appendChild(menuDiv);

    const projectButton = document.createElement("button");
    const urgentButton = document.createElement("button");
    const todayButton = document.createElement("button");
    const allTasksButton = document.createElement("button");

    projectButton.innerHTML = "Projects"
    urgentButton.innerHTML = "Urgent tasks"
    todayButton.innerHTML = "Today's tasks"
    allTasksButton.innerHTML = "All tasks"

    menuDiv.appendChild(projectButton);
    menuDiv.appendChild(urgentButton);
    menuDiv.appendChild(todayButton);
    menuDiv.appendChild(allTasksButton);


    // Main board (middle, showing project & task lists)
    // project 목록을 인쇄하는 function 만들어 실행한 후 mainboard에 추가하기

    const mainboardDiv = document.createElement("div");
    mainboardDiv.id = "mainboard-div";

    for (let key in projectManager.project) {
        const p = document.createElement("p");
        p.innerHTML = key;
        mainboardDiv.appendChild(p);
    }

    main.appendChild(mainboardDiv);


    // Todo board (right wing, showing a task's detail)
    // 특정 to-do를 불러오는 function 만들어 실행한 후 toDoDiv에 추가

    const toDoDiv = document.createElement("div");
    toDoDiv.id = "to-do-div";
    main.appendChild(toDoDiv);

    let todoExample = new Todo("Buy cheese cake", false, true, "2023-01-01", "My Project", "");

    return { main }

})();



const createDialog = (() => {

    const dialog = document.createElement("dialog");
    dialog.id = "dialog"

    const form = document.createElement("form");
    form.method = "dialog";
    form.id = "form";


    // dialog header

    const dialogTab = document.createElement("p");
    dialogTab.innerHTML = "Add a task!";
    dialogTab.id = "dialog-tab";

    const closeButton = document.createElement("button");
    closeButton.id = "close-button";
    closeButton.value = "cancel";
    closeButton.innerHTML = "✕";
    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    const headerDiv = document.createElement("div");
    headerDiv.appendChild(dialogTab);
    headerDiv.appendChild(closeButton);

    form.appendChild(headerDiv);


    // task's title

    const title = document.createElement("input");
    title.type = "text";
    title.name = "todo-title";
    title.placeholder = "Title";
    title.id = "todo-title";
    title.focus();
    title.required = true;
    form.appendChild(title);


    // task priority

    const urgentDiv = document.createElement("div");

    const urgentLabel = document.createElement("label");
    urgentLabel.for = "urgent";
    urgentLabel.innerHTML = "Urgent? "

    const urgent = document.createElement("input");
    urgent.type = "checkbox";
    urgent.name = "urgent";
    urgent.id = "urgent";

    urgentDiv.appendChild(urgentLabel);
    urgentDiv.appendChild(urgent);
    form.appendChild(urgentDiv);


    // task due date

    const dateDiv = document.createElement("div");
    const today = new Date();

    const dateLabel = document.createElement("label");
    dateLabel.for = "todo-date";
    dateLabel.innerHTML = "Due Date: "

    const date = document.createElement("input");
    date.type = "date";
    date.name = "todo-date";
    date.min = format(today, "yyyy-MM-dd");
    date.id = "todo-date";
    date.required = true;

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(date);
    form.appendChild(dateDiv);


    // task's parent project

    const project = document.createElement("select");

    for (let key in projectManager.project) {
        const option = document.createElement("option");
        option.value = key.replace(" ", "-").toLowerCase();
        option.innerHTML = key;
        project.appendChild(option);
    }

    form.appendChild(project);


    // task description

    const descriptionDiv = document.createElement("div");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.for = "description";
    descriptionLabel.innerHTML = "Description: "

    const description = document.createElement("textarea");
    description.name = "description";
    description.id = "description";

    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(description);
    form.appendChild(descriptionDiv);


    // submit button

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.id = "submit-button";
    submitButton.innerHTML = "Submit";
    form.appendChild(submitButton);


    dialog.appendChild(form);

    return { dialog }

})();



const addButtonManager = () => {


    // all add-buttons will show dialog

    const buttons = document.querySelectorAll(".add-button");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            createDialog.dialog.showModal();
        })
    });


};



const displayLoader = () => {
    document.body.appendChild(createHeader.header);
    document.body.appendChild(createMain.main);
    document.body.appendChild(createDialog.dialog)
    document.addEventListener("DOMContentLoaded", () => {
        addButtonManager();
    });
}



export { displayLoader };