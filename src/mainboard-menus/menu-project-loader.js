import { projectManager } from "../data";
import newProjectLoader from "./functions/new-project-loader";
import projectInputLoader from "./functions/project-input-loader";

export default function menuProjectLoader() {
    const mainboardDiv = document.createElement("div");
    mainboardDiv.id = "mainboard-project-div";

    const allProjectDiv = document.createElement("div");
    allProjectDiv.id = "all-project-div";

    for (let key in projectManager.project) {
        const projectDiv = newProjectLoader(key);
        allProjectDiv.appendChild(projectDiv);
    }

    const addProjectDiv = projectInputLoader();

    mainboardDiv.appendChild(allProjectDiv);
    mainboardDiv.appendChild(addProjectDiv);

    return mainboardDiv
};