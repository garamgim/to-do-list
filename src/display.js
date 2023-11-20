import Icon from './img/icon.svg'

import { format } from 'date-fns'

const createHeader = (() => {

    const header = document.createElement("header");

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

    const mainboardDiv = document.createElement("div");
    mainboardDiv.id = "mainboard-div";
    main.appendChild(mainboardDiv);

    // project 목록을 인쇄하는 function 만들어 실행한 후 mainboard에 추가하기



    const toDoDiv = document.createElement("div");
    toDoDiv.id = "to-do-div";
    main.appendChild(toDoDiv);

    // 특정 to-do를 불러오는 function 만들어 실행한 후 toDoDiv에 추가

    return { main }
})();

const createForm = (() => {

    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    form.method = "dialog";

    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");
    title.id = "title"
    title.focus();
    title.required = true;

    const urgentDiv = document.createElement("div");
    const urgent = document.createElement("input");
    const urgentLabel = document.createElement("label");
    urgentLabel.setAttribute("for", "urgent");
    urgentLabel.innerHTML = "Urgent? "
    urgent.setAttribute("type", "checkbox");
    urgent.setAttribute("name", "urgent");
    urgent.id = "urgent";
    urgentDiv.appendChild(urgentLabel);
    urgentDiv.appendChild(urgent);


    const dateDiv = document.createElement("div");
    const date = document.createElement("input");
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.innerHTML = "Due Date: "
    date.setAttribute("type", "date");
    date.setAttribute("name", "date");
    const today = new Date();
    date.setAttribute("min", format(today, "yyyy-MM-dd"));
    date.id = "date"
    date.required = true;
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(date);

    const project = document.createElement("select");






    dialog.appendChild(form);



})();


const displayLoader = () => {
    document.body.appendChild(createHeader.header);
    document.body.appendChild(createMain.main);
}

export { displayLoader };