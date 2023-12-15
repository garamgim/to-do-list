import { projectManager } from '../data';
import childTodoLoader from './functions/child-todo-loader';
import { compareAsc, parseISO } from 'date-fns'
import SortIcon from '../img/sort.svg';

export default function menuAllTodoLoader() {
    const div = document.createElement("div");
    div.id = "mainboard-all-div"

    const sortDiv = document.createElement("div");
    const todoDiv = document.createElement("div");

    sortDiv.id = "sort-div";
    todoDiv.id = "all-todo-div"

    const todoArr = projectManager.getAllTodo();
    todoMaker(todoArr, todoDiv);

    let sortToggle = false;
    const sortBtn = document.createElement("button");
    sortBtn.id = "sort-button";
    sortBtn.innerHTML = `<img src=${SortIcon} id="sort-icon"></img>` + "Date"
    sortBtn.addEventListener("click", (e) => {
        e.preventDefault();
        todoDiv.innerHTML = "";
        if (!sortToggle) {
            sortToggle = true;
            todoArr.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));
            todoMaker(todoArr, todoDiv);
        } else {
            sortToggle = false;
            todoArr.sort((a, b) => compareAsc(parseISO(b.date), parseISO(a.date)));
            todoMaker(todoArr, todoDiv);
        }
    })
    sortDiv.appendChild(sortBtn);

    div.appendChild(sortDiv);
    div.appendChild(todoDiv);

    return div
}

function todoMaker(arr, div) {
    if (arr.length === 0) {
        const p = document.createElement("p");
        p.id = "no-task";
        p.innerHTML = "No Task";
        p.className = "no-todo-message";
        p.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("dialog").showModal();
        })
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
}

