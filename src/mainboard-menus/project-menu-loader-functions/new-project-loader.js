import childTodoLoader from "./child-todo-loader";
import { projectManager } from "../../objects";

export default function (key) {

    // Mother div for a project
    const projectDiv = document.createElement("div");
    projectDiv.className = "project-div"
    projectDiv.id = key.toLowerCase().split(" ").join("");


    // Project title & Remove-project Button
    const projectHeader = document.createElement("div");
    projectHeader.className = "project-header";

    const projectTitle = document.createElement("p");
    projectTitle.classList = "project-title";
    projectTitle.innerHTML = key;

    const removeProjectBtn = document.createElement("button");
    removeProjectBtn.classList = "remove-project-button";
    removeProjectBtn.innerHTML = "✕";
    removeProjectBtn.addEventListener("click", () => {
        const result = confirm("Are you sure you want to delete this project?")
        if (result) {
            delete projectManager.project[key];
            projectHeader.remove();
            document.getElementById(`${key.toLowerCase().split(" ").join("")}-todos`).remove();
            document.getElementById(`${key.toLowerCase().split(" ").join("")}-option`).remove();
            console.log(projectManager.project)
        }
    })
    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(removeProjectBtn);
    projectDiv.appendChild(projectHeader);


    // Todo slides below the project title
    const projectChildTodos = document.createElement("div");
    projectChildTodos.id = `${key.toLowerCase().split(" ").join("")}-todos`;
    projectChildTodos.className = "show-todo";

    for (let todo of projectManager.project[key]) {
        const todoDiv = document.createElement("div");
        todoDiv.className = "child-todo";
        todoDiv.id = `${todo.title.toLowerCase().split(" ").join("")}-todo`
        childTodoLoader(todoDiv, todo);
        projectChildTodos.appendChild(todoDiv);
    }
    projectDiv.appendChild(projectChildTodos);

    // Add a new option to project select box in dialog
    const projectSelectBox = document.getElementById("project");
    const option = document.createElement("option");
    option.value = key;
    option.innerHTML = key;
    option.id = `${key.toLowerCase().split(" ").join("")}-option`
    projectSelectBox.insertBefore(option, projectSelectBox.lastChild);

    // If the project is empty, show dialog on click
    // If not, show its own to-dos below itself
    projectTitle.addEventListener("click", () => {
        if (projectManager.project[key].length === 0) {
            const dialog = document.getElementById("dialog");
            dialog.showModal();
            option.selected = true;
        } else {
            if (projectChildTodos.className === "hidden-todo") {
                projectChildTodos.className = "show-todo";
            } else {
                projectChildTodos.className = "hidden-todo";
            }
        }
    });

    return projectDiv
}