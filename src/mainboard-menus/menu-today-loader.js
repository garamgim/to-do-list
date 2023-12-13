import { projectManager } from "../data";
import childTodoLoader from "./functions/child-todo-loader";
import { format } from 'date-fns';

export default function menuTodayLoader() {
    const today = format(new Date(), 'yyyy-MM-dd');

    const div = document.createElement("div");
    div.id = "mainboard-today-div"

    const arr = projectManager.getTodayTodo(today);
    if (arr.length === 0) {
        const p = document.createElement("p");
        p.id = "no-today-task"
        p.innerHTML = "No Today's Task"
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