import { projectManager } from "../data";
import childTodoLoader from "./functions/child-todo-loader";

export default function menuAllTodoLoader() {
    const arr = projectManager.getAllTodo();
    const div = document.createElement("div");
    div.id = "mainboard-all-div"
    console.log(arr);

    if (arr.length === 0) {
        const p = document.createElement("p");
        p.id = "no-task"
        p.innerHTML = "No Task"
        div.appendChild(p);
    } else {
        for (let i = 0; i < arr.length; i++) {
            childTodoLoader(div, arr[i])
        }
    }

    return div
}