import { projectManager } from "./objects";

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

    const editProject = document.getElementById("edit-project");

    const editDescription = document.getElementById("edit-description");
    editDescription.value = todo.description;

    const editButton = document.getElementById("edit-button");
    const editButtonClone = editButton.cloneNode(true);
    editButton.parentNode.replaceChild(editButtonClone, editButton);

    editButtonClone.addEventListener("click", (e) => {
        e.preventDefault();

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

        console.log("Edited")
        console.log(projectManager.project);
        console.log(todo);
    })


}