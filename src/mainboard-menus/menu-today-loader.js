import { projectManager } from "../data";
import childTodoLoader from "./functions/child-todo-loader";

export default function menuTodayLoader() {
    const arr = projectManager.getTodayTodo();
    const div = document.createElement("div");
    div.id = "mainboard-today-div"

    if (arr.length === 0) {
        const p = document.createElement("p");
        p.id = "no-today-task"
        p.innerHTML = "No Today's Task"
        div.appendChild(p);
    } else {
        for (let i = 0; i < arr.length; i++) {
            childTodoLoader(div, arr[i])
        }
    }

    return div
}