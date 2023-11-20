import Icon from './img/icon.svg'

const createHeader = () => {

    const header = document.createElement("header");
    document.body.appendChild(header);

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

}

const createMain = () => {

    const main = document.createElement("main");
    document.body.appendChild(main);

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

}


const displayLoader = () => {
    createHeader();
    createMain();
}

export { displayLoader };