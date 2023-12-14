import menuProjectLoader from "./mainboard-menus/menu-project-loader";
import menuUrgentLoader from "./mainboard-menus/menu-urgent-loader";
import menuTodayLoader from "./mainboard-menus/menu-today-loader";
import menuAllTodoLoader from "./mainboard-menus/menu-all-todo-loader";
import lemon from "./mainboard-menus/lemon";
import { projectManager } from "./data";

export default function mainboardLoader() {
    const mainboardDiv = document.getElementById("mainboard");
    mainboardDiv.appendChild(menuProjectLoader());
    lemon();

    const projectBtn = document.getElementById("menu-project-button");
    projectBtn.addEventListener("click", (e) => {
        e.preventDefault;

        mainboardDiv.innerHTML = "";
        const projectSelectBox = document.getElementById("project");
        projectSelectBox.innerHTML = "";

        const selectProjectOption = document.createElement("option");
        selectProjectOption.value = ""
        selectProjectOption.disabled = true;
        selectProjectOption.selected = true;
        selectProjectOption.innerHTML = "Select a project";

        const newProjectOption = document.createElement("option");
        newProjectOption.innerHTML = "Create a new project";
        newProjectOption.value = "new";

        projectSelectBox.appendChild(selectProjectOption);
        projectSelectBox.appendChild(newProjectOption);
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

    const deleteCompletedBtn = document.getElementById("delete-completed-button");
    deleteCompletedBtn.addEventListener("click", (e) => {
        const result = confirm("Are you sure you want to delete completed tasks?")
        if (result) {
            e.preventDefault;
            let arr = projectManager.getCompletedTask();
            for (let todo of arr) {
                projectManager.deleteTodo(todo);
                document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-todo`).remove();
            }
        }
    })
}