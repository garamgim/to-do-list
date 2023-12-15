import todoBoardLoader from "../todo-board-loader";
import { projectManager } from "../../data";
import format from "date-fns/format";

export default function (div, todo) {

    const urgent = document.createElement("p");
    if (todo.urgent) {
        urgent.innerHTML = "&#10071;";
    }
    urgent.id = `${todo.title.toLowerCase().split(" ").join("")}-urgent`
    urgent.className = "child-todo-urgent"

    const title = document.createElement("p");
    title.innerHTML = todo.title;
    title.id = `${todo.title.toLowerCase().split(" ").join("")}-title`;
    title.className = "child-todo-title";
    title.addEventListener("click", () => { todoBoardLoader(todo) });


    const date = document.createElement("p");
    date.innerHTML = todo.date;
    date.id = `${todo.title.toLowerCase().split(" ").join("")}-date`
    date.className = "child-todo-date"

    const done = document.createElement("input");
    done.setAttribute("type", "checkbox");
    done.setAttribute("name", "done");
    done.id = `${todo.title.toLowerCase().split(" ").join("")}-done`
    done.className = "child-todo-done"
    done.checked = todo.done;
    if (done.checked) {
        title.style.textDecoration = "line-through";
        date.style.textDecoration = "line-through";
        urgent.style.textDecoration = "line-through";
    } else {
        title.style.textDecoration = "none";
        date.style.textDecoration = "none";
        urgent.style.textDecoration = "none";
    }
    done.addEventListener("click", () => {
        if (done.checked) {
            title.style.textDecoration = "line-through";
            date.style.textDecoration = "line-through";
            urgent.style.textDecoration = "line-through";
            todo.done = true;
        } else {
            title.style.textDecoration = "none";
            date.style.textDecoration = "none";
            urgent.style.textDecoration = "none";
            todo.done = false;
        }
    })

    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.className = "delete-todo-button";
    deleteTodoBtn.innerHTML = "✕";
    deleteTodoBtn.addEventListener("click", (e) => {
        const result = confirm("Are you sure you want to delete this task?")
        if (result) {
            e.preventDefault();
            projectManager.deleteTodo(todo);
            document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-todo`).remove();

            // Show "no task" message if there is 0 todo after deleting 
            const mainBoard = document.getElementById("mainboard");
            let divID = mainBoard.children[0].id.split("-");
            const today = format(new Date(), 'yyyy-MM-dd');

            if (divID[1] === "all" && projectManager.getAllTodo.length === 0) {
                const p = document.createElement("p");
                p.id = "no-task";
                p.innerHTML = "No Task";
                p.className = "no-todo-message";
                p.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.getElementById("dialog").showModal();
                });
                const div = document.getElementById("all-todo-div");
                div.appendChild(p);
            } else if (divID[1] === "today" && projectManager.getTodayTodo(today).length === 0) {
                const p = document.createElement("p");
                p.id = "no-today-task";
                p.innerHTML = "No Today's Task";
                p.className = "no-todo-message";
                p.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.getElementById("dialog").showModal();
                });
                const div = document.getElementById("mainboard-today-div");
                div.appendChild(p);
            } else if (divID[1] === "urgent" && projectManager.getUrgentTodo.length === 0) {
                const p = document.createElement("p");
                p.id = "no-urgent-task";
                p.innerHTML = "No Urgent Task";
                p.className = "no-todo-message";
                p.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.getElementById("dialog").showModal();
                });
                const div = document.getElementById("mainboard-urgent-div");
                div.appendChild(p);
            }
        }
    })

    div.appendChild(done);
    div.appendChild(urgent);
    div.appendChild(title);
    div.appendChild(date);
    div.appendChild(deleteTodoBtn);
}