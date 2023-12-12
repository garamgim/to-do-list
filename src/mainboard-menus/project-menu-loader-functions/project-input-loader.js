import { projectManager } from "../../objects";
import newProjectLoader from "./new-project-loader";

export default function () {
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

    const invalidMsg = document.createElement("p");
    invalidMsg.id = "mainboard-project-invalid-message";
    invalidMsg.innerHTML = "A project with this name already exists.";
    invalidMsg.style.display = "none";

    const addProjectInput = document.createElement("input");
    addProjectInput.setAttribute("type", "text");
    addProjectInput.setAttribute("placeholder", "Project Title");
    addProjectInput.autofocus = true;
    addProjectInput.id = "add-project-input";

    const addProjectEnter = document.createElement("button");
    addProjectEnter.id = "add-project-enter";
    addProjectEnter.innerHTML = "Enter";
    addProjectEnter.addEventListener("click", (e) => {
        let validity = projectManager.isProjectTitleValid(addProjectInput.value);

        if (validity) {
            e.preventDefault();
            const mainboardDiv = document.getElementById("mainboard")
            const title = addProjectInput.value;
            projectManager.setProjectByTitle(title);
            mainboardDiv.insertBefore(newProjectLoader(title), mainboardDiv.lastChild);
            addProjectInput.value = "";
            invalidMsg.style.display = "none";
        } else {
            invalidMsg.style.display = "";
        }
    })

    const addProjectInputDiv = document.createElement("div");
    addProjectInputDiv.id = "add-project-input-div"

    addProjectInputDiv.appendChild(invalidMsg);
    addProjectInputDiv.appendChild(addProjectInput);
    addProjectInputDiv.appendChild(addProjectEnter);
    addProjectInputDiv.style.display = "none";

    addProjectDiv.appendChild(addProjectBtn);
    addProjectDiv.appendChild(addProjectInputDiv);

    return addProjectDiv
}