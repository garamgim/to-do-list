import { projectManager } from "../objects";
import projectDivLoader from "../DOMfunctions/project-div-loader";
import childTodoLoader from "../DOMfunctions/child-todo-loader";

export default function projectMenuLoader() {

    const mainboardDiv = document.getElementById("mainboard-div");

    for (let key in projectManager.project) {
        const mainboardDiv = document.getElementById("mainboard-div");
        const projectDiv = projectDivLoader(key);
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
        e.preventDefault();
        const title = addProjectInput.value;
        projectManager.setProjectByTitle(title);
        mainboardDiv.insertBefore(projectDivLoader(txt), mainboardDiv.firstChild);
        addProjectInput.value = "";
    })

    const addProjectInputDiv = document.createElement("div");
    addProjectInputDiv.appendChild(addProjectInput);
    addProjectInputDiv.appendChild(addProjectEnter);
    addProjectInputDiv.style.display = "none";

    addProjectDiv.appendChild(addProjectBtn);
    addProjectDiv.appendChild(addProjectInputDiv);

    mainboardDiv.appendChild(addProjectDiv);

};