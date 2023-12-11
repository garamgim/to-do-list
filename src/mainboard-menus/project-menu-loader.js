import { projectManager } from "../objects";
import newProjectLoader from "./project-menu-loader-functions/new-project-loader";
import childTodoLoader from "./project-menu-loader-functions/child-todo-loader";
import projectInputLoader from "./project-menu-loader-functions/project-input-loader";

export default function projectMenuLoader() {
    const mainboardDiv = document.getElementById("mainboard-div");

    for (let key in projectManager.project) {
        const projectDiv = newProjectLoader(key);
        mainboardDiv.appendChild(projectDiv);
    }

    const addProjectDiv = projectInputLoader();
    mainboardDiv.appendChild(addProjectDiv);
};