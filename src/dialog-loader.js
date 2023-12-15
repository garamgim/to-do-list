import { format } from 'date-fns'
import { Todo, projectManager } from './data.js'
import childTodoLoader from './mainboard-menus/functions/child-todo-loader.js';
import newProjectLoader from './mainboard-menus/functions/new-project-loader.js';
import enterForClick from './mainboard-menus/functions/enter-for-click.js';

export default function () {

    const dialog = document.getElementById("dialog");
    const title = document.getElementById("todo-title");
    const date = document.getElementById("todo-date");
    const urgent = document.getElementById("urgent");
    const description = document.getElementById("description");
    const invalidMsg = document.getElementById("project-invalid-message");
    const newProjectInput = document.getElementById("new-project");
    const form = document.getElementById("form");


    // Close dialog button
    const closeBtn = document.getElementById("close-button");
    closeBtn.addEventListener("click", () => {
        newProjectInput.required = false;
        newProjectInput.style.display = "none";
        invalidMsg.style.display = "none";
        form.reset();
        dialog.close();
    })


    // Date formation
    const today = new Date();
    date.min = format(today, "yyyy-MM-dd");


    // Project select box
    const projectSelectBox = document.getElementById("project");

    const newProjectOption = document.createElement("option");
    newProjectOption.innerHTML = "Create a new project";
    newProjectOption.value = "new";

    projectSelectBox.addEventListener("change", () => {
        if (projectSelectBox.value === "new") {
            newProjectInput.required = true;
            newProjectInput.style.display = "";
        } else {
            newProjectInput.required = false;
            newProjectInput.style.display = "none";
            invalidMsg.style.display = "none";
        }
    })

    projectSelectBox.appendChild(newProjectOption);


    // Submit button
    const submitBtn = document.getElementById("submit-button");
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let titleInput = title.value;
        let done = false;
        let urgentInput = urgent.checked;
        let dateInput = date.value;
        let projectInput = "";
        if (projectSelectBox.value === "new") {
            projectInput = newProjectInput.value;
        } else {
            projectInput = projectSelectBox.value;
        }
        let descriptionInput = description.value;

        // Check form validity & project title availability
        let checkStatus = form.checkValidity();

        let checkProjectValidity = projectManager.isProjectTitleValid(projectInput);

        // If newly typed project already exists
        if (newProjectInput.style.display !== "none" && !checkProjectValidity) {
            invalidMsg.style.display = "";
        } else if (checkStatus) {
            // Make a new todo with form values & set todo's project 
            let todo = new Todo(titleInput, done, urgentInput, dateInput, projectInput, descriptionInput);
            projectManager.setProjectByTodo(todo);

            const mainBoard = document.getElementById("mainboard");
            let divID = mainBoard.children[0].id.split("-");
            // If creating a new project and project menu is opened on the mainboard
            if (newProjectInput.style.display !== "none" && divID[1] === "project") {
                // Add a new project div to the main board
                mainBoard.insertBefore(newProjectLoader(projectInput), mainBoard.lastChild);
                document.getElementById("no-project").remove();
            } else { // If adding to existing project
                const todoDiv = document.createElement("div");
                todoDiv.className = "child-todo";
                todoDiv.id = `${todo.title.toLowerCase().split(" ").join("")}-todo`
                childTodoLoader(todoDiv, todo);
                // Add todo div according to which menu is opened on mainboard
                if (divID[1] === "project") {
                    const div = document.getElementById(`${projectInput.toLowerCase().split(" ").join("")}-todos`);
                    div.appendChild(todoDiv);
                } else if (divID[1] === "all") {
                    document.getElementById("no-task").remove();
                    const div = document.getElementById("all-todo-div");
                    div.appendChild(todoDiv);
                } else if (divID[1] === "today") {
                    if (todo.date === format(today, "yyyy-MM-dd")) {
                        document.getElementById("no-today-task").remove();
                        const div = document.getElementById("mainboard-today-div");
                        div.append(todoDiv);
                    }
                } else if (divID[1] === "urgent") {
                    if (todo.urgent) {
                        document.getElementById("no-urgent-task").remove();
                        const div = document.getElementById("mainboard-urgent-div");
                        div.append(todoDiv);
                    }
                }
            }
            // Reset form
            newProjectInput.required = false;
            newProjectInput.style.display = "none";
            invalidMsg.style.display = "none";
            form.reset();
            dialog.close();
        } else {
            form.reportValidity()
        }
    })

    // Enter key as submit button
    title.addEventListener("keyup", (e) => enterForClick(e, submitBtn));
    urgent.addEventListener("keyup", (e) => enterForClick(e, submitBtn));
    date.addEventListener("keyup", (e) => enterForClick(e, submitBtn));
    newProjectInput.addEventListener("keyup", (e) => enterForClick(e, submitBtn));
}