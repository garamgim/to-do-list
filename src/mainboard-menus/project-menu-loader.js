import { projectManager } from "../objects";
import projectDivLoader from "../DOMfunctions/project-div-loader";
import childTodoLoader from "../DOMfunctions/child-todo-loader";

export default function projectMenuLoader() {

    const mainboardDiv = document.getElementById("mainboard-div");

    for (let key in projectManager.project) {
        const mainboardDiv = document.getElementById("mainboard-div");

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
                document.getElementById(`${key.toLowerCase().split(" ").join("")}-option`).remove();
                console.log(projectManager.project)
            }
        })

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

        mainboardDiv.appendChild(projectDiv);
    }


    // "Add-project" div
    const addProjectDiv = document.createElement("div");
    addProjectDiv.id = "add-project-div";

    const addProjectBtn = document.createElement("button");
    addProjectBtn.id = "add-project-button";
    addProjectBtn.innerHTML = "Add a project";
    addProjectBtn.addEventListener("click", () => {
        if (addProjectInputDiv.style.display === "none") {
            addProjectInputDiv.style.display = "";
        } else {
            addProjectInputDiv.style.display = "none";
        }
    })

    const addProjectInput = document.createElement("input");
    addProjectInput.setAttribute("type", "text");
    addProjectInput.setAttribute("placeholder", "Project Title");
    addProjectInput.autofocus = true;
    addProjectInput.id = "add-project-input";

    const addProjectEnter = document.createElement("button");
    addProjectEnter.id = "add-project-enter";
    addProjectEnter.innerHTML = "Enter";
    addProjectEnter.addEventListener("click", () => {
        projectManager.project[`${addProjectInput.value}`] = [];
        addProjectInput.value = "";
        console.log(projectManager.project);
    })

    const addProjectInputDiv = document.createElement("div");
    addProjectInputDiv.appendChild(addProjectInput);
    addProjectInputDiv.appendChild(addProjectEnter);
    addProjectInputDiv.style.display = "none";

    addProjectDiv.appendChild(addProjectBtn);
    addProjectDiv.appendChild(addProjectInputDiv);

    mainboardDiv.appendChild(addProjectDiv);

};