import Icon from './img/icon.svg'
import { format } from 'date-fns'
import { Todo, projectManager } from './objects.js'
import projectMenuLoader from './mainboard-menus/projects.js';


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

        // Submit button
        const submitBtn = document.getElementById("submit-button");
        submitBtn.addEventListener('click', () => {

            let titleInput = document.getElementById("todo-title").value;
            let done = false;
            let urgentInput = document.getElementById("urgent").checked;
            let dateInput = date.value;
            let projectInput = project.value;
            let descriptionInput = document.getElementById("description").value;

            let todo = new Todo(titleInput, done, urgentInput, dateInput, projectInput, descriptionInput);

            projectManager.setProject(todo);

            const todoDiv = document.getElementById("project-child-todo-div");
            const titleP = document.createElement("p");
            titleP.innerHTML = todo.title;
            titleP.id = "project-child-todo";
            todoDiv.appendChild(titleP);

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
