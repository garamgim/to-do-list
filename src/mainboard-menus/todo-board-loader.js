import { Todo, projectManager } from "../data";
import childTodoLoader from "./functions/child-todo-loader";
import newProjectLoader from "./functions/new-project-loader";
import enterForClick from "./functions/enter-for-click";

export default function (todo) {

    const displayTitle = document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-title`);
    const displayUrgent = document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-urgent`);
    const displayDate = document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-date`);
    const displayDone = document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-done`);

    const lemon = document.getElementById("lemon-board");
    lemon.style.display = "none";

    const newProjectInput = document.getElementById("edit-project-input");
    newProjectInput.style.display = "none";
    newProjectInput.value = "";

    const invalidMsg = document.getElementById("edit-project-invalid-message");
    invalidMsg.style.display = "none";

    const cancelEditButton = document.getElementById("edit-close-button");
    cancelEditButton.addEventListener("click", (e) => {
        e.preventDefault();
        toDoBoard.style.display = "none";
        lemon.style.display = "flex";
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

    const editProject = document.getElementById("edit-project");
    editProject.innerHTML = "";

    for (let key in projectManager.project()) {
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

    editProject.addEventListener("change", () => {
        if (editProject.value === "new") {
            newProjectInput.required = true;
            newProjectInput.style.display = "";
        } else {
            invalidMsg.style.display = "none";
            newProjectInput.required = false;
            newProjectInput.value = "";
            newProjectInput.style.display = "none";
        }
    })

    const editDescription = document.getElementById("edit-description");
    editDescription.value = todo.description;
    console.log(todo.description)

    const editButton = document.getElementById("edit-button");
    const editButtonClone = editButton.cloneNode(true);
    editButton.parentNode.replaceChild(editButtonClone, editButton);

    editButtonClone.addEventListener("click", (e) => {
        e.preventDefault();
        let oldTodoDiv = document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-todo`);

        // Update object
        projectManager.updateTodo(todo, "urgent", editUrgent.checked);
        projectManager.updateTodo(todo, "date", editDate.value);
        projectManager.updateTodo(todo, "done", editDone.checked);
        projectManager.updateTodo(todo, "description", editDescription.value);
        projectManager.updateTodo(todo, "title", editTitle.value);

        todo.title = editTitle.value;
        todo.urgent = editUrgent.checked;
        todo.date = editDate.value;
        todo.done = editDone.checked;
        todo.description = editDescription.value;

        // Update mainboard display
        displayTitle.innerHTML = editTitle.value;
        displayDate.innerHTML = editDate.value;

        if (editUrgent.checked) {
            displayUrgent.innerHTML = "&#10071";
        } else {
            displayUrgent.innerHTML = "";
        }
        displayDone.checked = editDone.checked;

        if (editDone.checked) {
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
                if (projectManager.isProjectTitleValid(newProjectInput.value)) {
                    // Make new project by input if valid
                    projectManager.moveProject(todo, newProjectInput.value);
                    todo.project = newProjectInput.value;
                    const allProjectDiv = document.getElementById("all-project-div");
                    allProjectDiv.appendChild(newProjectLoader(newProjectInput.value));

                    // New option for the select box on todo-board
                    const currentProjectOption = document.createElement("option");
                    currentProjectOption.value = newProjectInput.value;
                    currentProjectOption.innerHTML = newProjectInput.value;
                    currentProjectOption.id = `${newProjectInput.value.toLowerCase().split(" ").join("")}-option-todo-board`;
                    editProject.insertBefore(currentProjectOption, editProject.lastChild);

                    oldTodoDiv.remove();
                    refreshForm();
                } else {
                    invalidMsg.style.display = "";
                }
            } else {
                projectManager.moveProject(todo, editProject.value);
                todo.project = editProject.value;

                const projectDiv = document.getElementById(`${editProject.value.toLowerCase().split(" ").join("")}-todos`);
                console.log(projectDiv.id);
                projectDiv.appendChild(newTodoDiv(todo));

                oldTodoDiv.remove();
                refreshForm();
            }
        } else {
            oldTodoDiv = newTodoDiv(todo);
            refreshForm();
        }

        function newTodoDiv(todo) {
            const newTodoDiv = document.createElement("div");
            newTodoDiv.className = "child-todo";
            newTodoDiv.id = `${editTitle.value.toLowerCase().split(" ").join("")}-todo`;
            childTodoLoader(newTodoDiv, todo);
            return newTodoDiv;
        }

        function refreshForm() {
            alert("Successfully Edited!");
            newProjectInput.value = "";
            newProjectInput.style.display = "none";
            toDoBoard.style.display = "none";
            invalidMsg.style.display = "none";
            lemon.style.display = "flex";
        }
    })

    // Enter key as Edit button
    editTitle.addEventListener("keyup", (e) => enterForClick(e, editButtonClone));
    editDescription.addEventListener("keyup", (e) => enterForClick(e, editButtonClone));
    newProjectInput.addEventListener("keyup", (e) => enterForClick(e, editButtonClone));
}