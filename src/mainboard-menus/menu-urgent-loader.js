import { projectManager } from "../data";
import childTodoLoader from "./functions/child-todo-loader";

export default function menuUrgentLoader() {
    const arr = projectManager.getUrgentTodo();
    const div = document.createElement("div");
    div.id = "mainboard-urgent-div"

    if (arr.length === 0) {
        const p = document.createElement("p");
        p.id = "no-urgent-task"
        p.innerHTML = "No Urgent Task"
        div.appendChild(p);
    } else {
        for (let i = 0; i < arr.length; i++) {
            childTodoLoader(div, arr[i])
        }
    }

    return div
}