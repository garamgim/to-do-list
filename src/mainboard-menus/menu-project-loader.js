import { projectManager } from "../data";
import newProjectLoader from "./functions/new-project-loader";
import projectInputLoader from "./functions/project-input-loader";

export default function menuProjectLoader() {
    const mainboardDiv = document.createElement("div");
    mainboardDiv.id = "mainboard-project-div";

    const allProjectDiv = document.createElement("div");
    allProjectDiv.id = "all-project-div";

    if (Object.keys(projectManager.project).length === 0) {
        const noProjectMessage = document.createElement("p");
        noProjectMessage.innerHTML = "No Project";
        noProjectMessage.id = "no-project";
        noProjectMessage.className = "no-todo-message";
        noProjectMessage.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("dialog").showModal();
        })
        allProjectDiv.appendChild(noProjectMessage);
    }

    for (let key in projectManager.project) {
        const projectDiv = newProjectLoader(key);
        allProjectDiv.appendChild(projectDiv);
    }

    const addProjectDiv = projectInputLoader();

    mainboardDiv.appendChild(allProjectDiv);
    mainboardDiv.appendChild(addProjectDiv);

    return mainboardDiv
};