import { projectManager } from "../objects";

export default function projectMenuLoader() {

    const mainboardDiv = document.getElementById("mainboard-div");

    for (let key in projectManager.project) {

        // Mother div for a project
        const projectDiv = document.createElement("div");
        projectDiv.className = "project-div"
        projectDiv.addEventListener("click", () => {
            if (todoDiv.style.display === "none") {
                todoDiv.style.display = "";
            } else {
                todoDiv.style.display = "none";
            }
        });

        const p = document.createElement("p");
        p.classList = "project-title";
        p.innerHTML = key;

        const removeProjectBtn = document.createElement("button");
        removeProjectBtn.classList = "remove-project-button";
        removeProjectBtn.innerHTML = "✕";

        projectDiv.appendChild(p);
        projectDiv.appendChild(removeProjectBtn);


        // Todo slides which is opened upon clicking project title
        const todoDiv = document.createElement("div");
        todoDiv.id = "project-child-todo-div"
        todoDiv.style.display = "none";

        for (let project of projectManager.project[key]) {
            const p = document.createElement("p");
            p.innerHTML = project.title;
            p.id = "project-child-todo";

            todoDiv.appendChild(p);
        }

        mainboardDiv.appendChild(projectDiv);
        mainboardDiv.appendChild(todoDiv);
    }


    // Add project div
    const addProjectDiv = document.createElement("div");
    addProjectDiv.id = "add-project-div";

    const addProjectBtn = document.createElement("button");
    addProjectBtn.id = "add-project-button";
    addProjectBtn.innerHTML = "Add a project";
    addProjectBtn.addEventListener("click", () => {
        if (addProjectInput.style.display === "none") {
            addProjectInput.style.display = "";
        } else {
            addProjectInput.style.display = "none";
        }
    })

    const addProjectInput = document.createElement("input");
    addProjectInput.setAttribute("type", "text");
    addProjectInput.setAttribute("placeholder", "Project Title");
    addProjectInput.autofocus = true;
    addProjectInput.id = "add-project-input";
    addProjectInput.style.display = "none";

    addProjectDiv.appendChild(addProjectBtn);
    addProjectDiv.appendChild(addProjectInput);

    mainboardDiv.appendChild(addProjectDiv);

};