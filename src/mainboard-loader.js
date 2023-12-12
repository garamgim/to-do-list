import menuProjectLoader from "./mainboard-menus/menu-project-loader";
import menuUrgentLoader from "./mainboard-menus/menu-urgent-loader";
import menuTodayLoader from "./mainboard-menus/menu-today-loader";
import menuAllTodoLoader from "./mainboard-menus/menu-all-todo-loader";

export default function mainboardLoader() {
    const mainboardDiv = document.getElementById("mainboard");
    mainboardDiv.appendChild(menuProjectLoader());

    const projectBtn = document.getElementById("menu-project-button");
    projectBtn.addEventListener("click", (e) => {
        e.preventDefault;
        mainboardDiv.innerHTML = "";
        mainboardDiv.appendChild(menuProjectLoader());
    })

    const urgentBtn = document.getElementById("menu-urgent-button");
    urgentBtn.addEventListener("click", (e) => {
        e.preventDefault;
        mainboardDiv.innerHTML = "";
        mainboardDiv.appendChild(menuUrgentLoader());
    })

    const todayBtn = document.getElementById("menu-today-button");
    todayBtn.addEventListener("click", (e) => {
        e.preventDefault;
        mainboardDiv.innerHTML = "";
        mainboardDiv.appendChild(menuTodayLoader());
    })

    const allBtn = document.getElementById("menu-all-button");
    allBtn.addEventListener("click", (e) => {
        e.preventDefault;
        mainboardDiv.innerHTML = "";
        mainboardDiv.appendChild(menuAllTodoLoader());
    })
}