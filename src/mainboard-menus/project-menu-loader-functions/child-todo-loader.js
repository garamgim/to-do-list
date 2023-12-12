import todoBoardLoader from "../../todo-board-loader";
import { projectManager } from "../../objects";

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
    title.addEventListener("click", () => {
        console.log("current", todo);
        todoBoardLoader(todo);
    });
    title.className = "child-todo-title"

    const date = document.createElement("p");
    date.innerHTML = todo.date;
    date.id = `${todo.title.toLowerCase().split(" ").join("")}-date`
    date.className = "child-todo-date"

    const done = document.createElement("input");
    done.setAttribute("type", "checkbox");
    done.setAttribute("name", "done");
    done.id = `${todo.title.toLowerCase().split(" ").join("")}-done`
    done.className = "child-todo-done"
    done.addEventListener("click", () => {
        if (done.checked) {
            title.style.textDecoration = "line-through";
            date.style.textDecoration = "line-through";
            urgent.style.textDecoration = "line-through";
            todo.done = true;
            console.log(todo.done);
        } else {
            title.style.textDecoration = "none";
            date.style.textDecoration = "none";
            urgent.style.textDecoration = "none";
            todo.done = false;
            console.log(todo.done);
        }
    })

    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.id = "delete-todo-button";
    deleteTodoBtn.innerHTML = "✕";
    deleteTodoBtn.addEventListener("click", (e) => {
        const result = confirm("Are you sure you want to delete this task?")
        if (result) {
            e.preventDefault();
            projectManager.deleteTodo(todo);
            document.getElementById(`${todo.title.toLowerCase().split(" ").join("")}-todo`).remove();
        }
    })

    div.appendChild(done);
    div.appendChild(urgent);
    div.appendChild(title);
    div.appendChild(date);
    div.appendChild(deleteTodoBtn);
}