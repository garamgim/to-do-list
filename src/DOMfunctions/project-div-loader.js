import childTodoLoader from "./child-todo-loader";
import { projectManager } from "../objects";

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

    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(removeProjectBtn);
    projectDiv.appendChild(projectHeader);


    // Todo slides which is opened upon clicking project title
    const projectChildTodos = document.createElement("div");
    projectChildTodos.id = `${key.toLowerCase().split(" ").join("")}-todos`;
    projectChildTodos.className = "show-todo";

    for (let todo of projectManager.project[key]) {
        const todoDiv = document.createElement("div");
        todoDiv.className = "child-todo";
        childTodoLoader(todoDiv, todo);
        projectChildTodos.appendChild(todoDiv);
    }

    projectDiv.appendChild(projectChildTodos);

    projectTitle.addEventListener("click", () => {
        if (projectChildTodos.className === "hidden-todo") {
            projectChildTodos.className = "show-todo";
        } else {
            projectChildTodos.className = "hidden-todo";
        }
    });

    return projectDiv
}