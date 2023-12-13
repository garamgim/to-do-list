import { projectManager } from "../data";
import newProjectLoader from "./functions/new-project-loader";
import projectInputLoader from "./functions/project-input-loader";

export default function menuProjectLoader() {
    const div = document.createElement("div");
    div.id = "mainboard-project-div"

    if (Object.keys(projectManager.project).length !== 0) {
        for (let key in projectManager.project) {
            const projectDiv = newProjectLoader(key);
            div.appendChild(projectDiv);
        }
    } else {
        const p = document.createElement("p");
        p.id = "no-project"
        p.innerHTML = "No Project"
        div.appendChild(p);
    }


    const addProjectDiv = projectInputLoader();
    div.appendChild(addProjectDiv);

    return div
};