import Icon from './img/icon.svg'
import { format } from 'date-fns'
import { Todo, projectManager } from './objects.js'
import childTodoLoader from './DOMfunctions/child-todo-loader.js';
import projectMenuLoader from './mainboard-menus/project-menu-loader.js';
import projectDivLoader from "./DOMfunctions/project-div-loader.js";

export default function DOMLoader() {

    (function iconLoader() {

        const logoDiv = document.getElementById("logo-div");

        const icon = new Image();
        icon.src = Icon;
        icon.id = "icon";

        logoDiv.appendChild(icon);

    })();


    (function mainboardEvents() {

        projectMenuLoader();

    })();


    (function dialogEvents() {

        // Close dialog button
        const dialog = document.getElementById("dialog");
        const closeBtn = document.getElementById("close-button");
        closeBtn.addEventListener("click", () => {
            dialog.close();
        })


        // Date formation
        const date = document.getElementById("todo-date");
        const today = new Date();
        date.min = format(today, "yyyy-MM-dd");


        // Project select box
        const projectSelectBox = document.getElementById("project");

        const newProjectOption = document.createElement("option");
        newProjectOption.innerHTML = "Create a new project";
        newProjectOption.value = "new";

        const newProjectInput = document.getElementById("new-project");

        projectSelectBox.addEventListener("change", () => {
            if (projectSelectBox.value === "new") {
                newProjectInput.required = true;
                newProjectInput.style.display = "";
            } else {
                newProjectInput.required = false;
                newProjectInput.style.display = "none";
            }
        })

        projectSelectBox.appendChild(newProjectOption);


        // Submit button
        const submitBtn = document.getElementById("submit-button");
        submitBtn.addEventListener('click', () => {

            const form = document.getElementById("form")
            let checkStatus = form.checkValidity();

            if (checkStatus) {
                // Make a new todo with form values
                let titleInput = document.getElementById("todo-title").value;
                let done = false;
                let urgentInput = document.getElementById("urgent").checked;
                let dateInput = date.value;
                let projectInput = "";
                if (projectSelectBox.value === "new") {
                    projectInput = newProjectInput.value;
                } else {
                    projectInput = projectSelectBox.value;
                }
                let descriptionInput = document.getElementById("description").value;

                let todo = new Todo(titleInput, done, urgentInput, dateInput, projectInput, descriptionInput);

                projectManager.setProjectByTodo(todo);

                if (newProjectInput.style.display !== "none") {
                    // Add a new project div to the main board
                    const mainBoard = document.getElementById("mainboard-div");
                    mainBoard.insertBefore(projectDivLoader(projectInput), mainBoard.firstChild);
                } else {
                    // Just add child-todo to existing project header, not adding an option to a select box
                    const projectDiv = document.getElementById(`${projectInput.toLowerCase().split(" ").join("")}-todos`);
                    const todoDiv = document.createElement("div");
                    todoDiv.className = "child-todo";
                    childTodoLoader(todoDiv, todo);
                    projectDiv.appendChild(todoDiv);
                }

                newProjectInput.required = false;
                newProjectInput.style.display = "none";
                form.reset();
                dialog.close();
            } else {
                form.reportValidity()
            }

        })

    })();


    (function addButtonEvents() {

        const dialog = document.getElementById("dialog");
        const buttons = document.querySelectorAll(".add-button");
        buttons.forEach((btn) => {
            btn.addEventListener("click", () => {
                dialog.showModal();
            })
        });

    })();

}
