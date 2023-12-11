import Icon from './img/icon.svg'
import { format } from 'date-fns'
import { Todo, projectManager } from './objects.js'
import projectMenuLoader from './mainboard-menus/projects.js';
import childTodoLoader from "./mainboard-menus/child-todo.js";


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
        const project = document.getElementById("project");

        for (let key in projectManager.project) {
            const option = document.createElement("option");
            option.value = key;
            option.innerHTML = key;
            project.appendChild(option);
        }

        const newProjectOption = document.createElement("option");
        newProjectOption.innerHTML = "Create a new project";
        newProjectOption.value = "new";

        const newProjectInput = document.getElementById("new-project");

        project.addEventListener("change", () => {
            if (project.value === "new") {
                newProjectInput.required = true;
                newProjectInput.style.display = "";
            } else {
                newProjectInput.style.display = "none";
            }
        })

        project.appendChild(newProjectOption);


        // Submit button
        const submitBtn = document.getElementById("submit-button");
        submitBtn.addEventListener('click', () => {

            let titleInput = document.getElementById("todo-title").value;
            let done = false;
            let urgentInput = document.getElementById("urgent").checked;
            let dateInput = date.value;
            let projectInput = "";
            if (project.value === "new") {
                projectInput = document.getElementById("new-project").value;
            } else {
                projectInput = project.value;
            }
            let descriptionInput = document.getElementById("description").value;

            let todo = new Todo(titleInput, done, urgentInput, dateInput, projectInput, descriptionInput);

            projectManager.setProject(todo);
            document.getElementById("mainboard-div").innerHTML = ""
            projectMenuLoader();

            /*

            const projectDiv = document.getElementById(`${projectInput.toLowerCase().split(" ").join("")}-todos`);
            const todoDiv = document.createElement("div");
            todoDiv.className = "child-todo";
            childTodoLoader(todoDiv, todo);
            projectDiv.appendChild(todoDiv);
            */
            console.log(todo);
            console.log(projectInput);
            console.log(projectManager.project);
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
