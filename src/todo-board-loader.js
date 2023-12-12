import projectMenuLoader from "./mainboard-menus/project-menu-loader";
import { projectManager } from "./objects";
import childTodoLoader from "./mainboard-menus/project-menu-loader-functions/child-todo-loader";
import newProjectLoader from "./mainboard-menus/project-menu-loader-functions/new-project-loader";

export default function (todo) {

    const displayTitle = document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-title`);
    const displayUrgent = document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-urgent`);
    const displayDate = document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-date`);
    const displayDone = document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-done`);

    const cancelEditButton = document.getElementById("edit-close-button");
    cancelEditButton.addEventListener("click", (e) => {
        e.preventDefault();
        toDoBoard.style.display = "none";
    })

    const toDoBoard = document.getElementById("to-do-board");
    toDoBoard.style.display = "flex";

    const editTitle = document.getElementById("edit-title");
    editTitle.value = todo.title;

    const editUrgent = document.getElementById("edit-urgent");
    editUrgent.checked = todo.urgent;

    const editDone = document.getElementById("edit-done");
    editDone.checked = todo.done;

    const editDate = document.getElementById("edit-date");
    editDate.value = todo.date;

    // project select box
    const editProject = document.getElementById("edit-project");
    editProject.innerHTML = "";

    for (let key in projectManager.project) {
        const option = document.createElement("option");
        option.value = key;
        option.innerHTML = key;
        option.id = `${key.toLowerCase().split(" ").join("")}-option-todo-board`;
        editProject.append(option);
    }

    const newProjectOption = document.createElement("option");
    newProjectOption.innerHTML = "Create a new project";
    newProjectOption.value = "new";
    editProject.appendChild(newProjectOption);

    document.getElementById(`${todo.project.toLowerCase().split(" ").join("")}-option-todo-board`).selected = true;

    const newProjectInput = document.getElementById("edit-project-input");
    editProject.addEventListener("change", () => {
        if (editProject.value === "new") {
            newProjectInput.required = true;
            newProjectInput.style.display = "";
        } else {
            newProjectInput.required = false;
            newProjectInput.style.display = "none";
        }
    })
    //project select box

    const editDescription = document.getElementById("edit-description");
    editDescription.value = todo.description;

    const editButton = document.getElementById("edit-button");
    const editButtonClone = editButton.cloneNode(true);
    editButton.parentNode.replaceChild(editButtonClone, editButton);

    editButtonClone.addEventListener("click", (e) => {
        e.preventDefault();
        let oldTodoDiv = document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-todo`);

        // Update object
        todo.title = editTitle.value;
        todo.urgent = editUrgent.checked;
        todo.date = editDate.value;
        todo.done = editDone.checked;
        todo.description = editDescription.value;

        // Update mainboard display
        displayTitle.innerHTML = todo.title;
        displayDate.innerHTML = todo.date;

        if (todo.urgent) {
            displayUrgent.innerHTML = "&#10071";
        } else {
            displayUrgent.innerHTML = "";
        }
        displayDone.checked = todo.done;

        if (todo.done) {
            displayTitle.style.textDecoration = "line-through";
            displayDate.style.textDecoration = "line-through";
            displayUrgent.style.textDecoration = "line-through";
        } else {
            displayTitle.style.textDecoration = "none";
            displayDate.style.textDecoration = "none";
            displayUrgent.style.textDecoration = "none";
        }

        // Update project
        if (todo.project !== editProject.value) {
            if (newProjectInput.style.display === "") {
                projectManager.moveProject(todo, newProjectInput.value);

                const mainBoard = document.getElementById("mainboard");
                mainBoard.insertBefore(newProjectLoader(newProjectInput.value), mainBoard.firstChild);
            } else {
                projectManager.moveProject(todo, editProject.value);

                const newTodoDiv = document.createElement("div");
                newTodoDiv.className = "child-todo";
                newTodoDiv.id = `${todo.title.toLowerCase().split(" ").join("")}-todo`;
                childTodoLoader(newTodoDiv, todo);

                const projectDiv = document.getElementById(`${todo.project.toLowerCase().split(" ").join("")}`);
                projectDiv.appendChild(newTodoDiv);
            }
            oldTodoDiv.remove();

            // New option for the select box on todo-board
            const currentProjectOption = document.createElement("option");
            currentProjectOption.value = todo.project;
            currentProjectOption.innerHTML = todo.project;
            currentProjectOption.id = `${todo.project.toLowerCase().split(" ").join("")}-option-todo-board`;

            editProject.insertBefore(currentProjectOption, editProject.lastChild);
            currentProjectOption.selected = true;
            newProjectInput.style.display = "none";
        }
        alert("Successfully Edited!");
        toDoBoard.style.display = "none";
    })

}