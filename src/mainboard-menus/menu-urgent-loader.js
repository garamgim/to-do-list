import { projectManager } from "../data";
import childTodoLoader from "./functions/child-todo-loader";

export default function menuUrgentLoader() {
    const div = document.createElement("div");
    div.id = "mainboard-urgent-div"

    const arr = projectManager.getUrgentTodo();
    if (arr.length === 0) {
        const p = document.createElement("p");
        p.id = "no-urgent-task"
        p.innerHTML = "No Urgent Task"
        p.className = "no-todo-message"
        div.appendChild(p);
    } else {
        for (let i = 0; i < arr.length; i++) {
            const childDiv = document.createElement("div");
            childDiv.classList = "child-todo";
            childDiv.id = `${arr[i].title.toLowerCase().split(" ").join("")}-todo`
            childTodoLoader(childDiv, arr[i]);
            div.appendChild(childDiv);
        }
    }

    return div
}