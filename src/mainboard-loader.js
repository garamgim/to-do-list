import menuProjectLoader from "./mainboard-menus/menu-project-loader";
import menuUrgentLoader from "./mainboard-menus/menu-urgent-loader";
import menuTodayLoader from "./mainboard-menus/menu-today-loader";
import menuAllTodoLoader from "./mainboard-menus/menu-all-todo-loader";
import lemon from "./mainboard-menus/lemon";
import { Todo, projectManager } from "./data";

export default function mainboardLoader() {
    if (Object.keys(projectManager.project()).length === 0) {
        localStorage.setItem("My Project", JSON.stringify([
            new Todo("Buy lemonade", false, false, "2023-12-31", "My Project", ""),
            new Todo("Squeeze lemon on the right", false, true, "2023-12-10", "My Project", ""),
            new Todo("Call alfy", true, false, "2023-12-25", "My Project", "")
        ]))
    }

    const mainboardDiv = document.getElementById("mainboard");
    mainboardDiv.appendChild(menuProjectLoader());
    lemon();

    const projectBtn = document.getElementById("menu-project-button");
    projectBtn.addEventListener("click", (e) => {
        e.preventDefault;

        mainboardDiv.innerHTML = "";

        // Preventing this button from making an option for multiple times
        const projectSelectBox = document.getElementById("project");
        projectSelectBox.innerHTML = "";

        const selectProjectOption = document.createElement("option");
        selectProjectOption.value = ""
        selectProjectOption.hidden = true;
        selectProjectOption.innerHTML = "Select a project";

        const newProjectOption = document.createElement("option");
        newProjectOption.innerHTML = "Create a new project";
        newProjectOption.value = "new";

        projectSelectBox.appendChild(selectProjectOption);
        projectSelectBox.appendChild(newProjectOption);

        mainboardDiv.appendChild(menuProjectLoader());

        projectBtn.className = "menu-selected";
        urgentBtn.className = "menu-button";
        todayBtn.className = "menu-button";
        allBtn.className = "menu-button";
    })

    const urgentBtn = document.getElementById("menu-urgent-button");
    urgentBtn.addEventListener("click", (e) => {
        e.preventDefault;
        mainboardDiv.innerHTML = "";
        mainboardDiv.appendChild(menuUrgentLoader());

        projectBtn.className = "menu-button";
        urgentBtn.className = "menu-selected";
        todayBtn.className = "menu-button";
        allBtn.className = "menu-button";
    })

    const todayBtn = document.getElementById("menu-today-button");
    todayBtn.addEventListener("click", (e) => {
        e.preventDefault;
        mainboardDiv.innerHTML = "";
        mainboardDiv.appendChild(menuTodayLoader());

        projectBtn.className = "menu-button";
        urgentBtn.className = "menu-button";
        todayBtn.className = "menu-selected";
        allBtn.className = "menu-button";
    })

    const allBtn = document.getElementById("menu-all-button");
    allBtn.addEventListener("click", (e) => {
        e.preventDefault;
        mainboardDiv.innerHTML = "";
        mainboardDiv.appendChild(menuAllTodoLoader());

        projectBtn.className = "menu-button";
        urgentBtn.className = "menu-button";
        todayBtn.className = "menu-button";
        allBtn.className = "menu-selected";
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