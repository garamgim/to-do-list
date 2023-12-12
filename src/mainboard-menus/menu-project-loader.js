import { projectManager } from "../data";
import newProjectLoader from "./functions/new-project-loader";
import projectInputLoader from "./functions/project-input-loader";

export default function menuProjectLoader() {
    const div = document.createElement("div");
    div.id = "mainboard-project-div"

    for (let key in projectManager.project) {
        const projectDiv = newProjectLoader(key);
        div.appendChild(projectDiv);
    }

    const addProjectDiv = projectInputLoader();
    div.appendChild(addProjectDiv);

    return div
};