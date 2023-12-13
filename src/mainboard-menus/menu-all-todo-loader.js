import { projectManager } from "../data";
import childTodoLoader from "./functions/child-todo-loader";
import { compareAsc, parseISO } from 'date-fns'
// Date로 sort하는 기능 넣기

export default function menuAllTodoLoader() {
    const div = document.createElement("div");
    div.id = "mainboard-all-div"

    const arr = projectManager.getAllTodo();
    arr.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));

    if (arr.length === 0) {
        const p = document.createElement("p");
        p.id = "no-task"
        p.innerHTML = "No Task"
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