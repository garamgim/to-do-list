import Icon from './img/icon.svg'
import { format } from 'date-fns'
import { Todo, projectManager } from './objects.js'


export default function DOMLoader() {

    (function iconLoader() {

        const logoDiv = document.getElementById("logo-div");

        const icon = new Image();
        icon.src = Icon;
        icon.id = "icon";

        logoDiv.appendChild(icon);

    })();


    (function mainboardEvents() {

        const mainboardDiv = document.getElementById("mainboard-div");

        for (let key in projectManager.project) {
            const p = document.createElement("p");
            p.innerHTML = key;
            mainboardDiv.appendChild(p);
        }

        let todoExample = new Todo("Buy cheese cake", false, true, "2023-01-01", "My Project", "");

    })();


    (function dialogEvents() {

        const dialog = document.getElementById("dialog");
        const closeBtn = document.getElementById("close-button");
        closeBtn.addEventListener("click", () => {
            dialog.close();
        })

        const date = document.getElementById("todo-date");
        const today = new Date();
        date.min = format(today, "yyyy-MM-dd");

        const project = document.getElementById("project");

        for (let key in projectManager.project) {
            const option = document.createElement("option");
            option.value = key.replace(" ", "-").toLowerCase();
            option.innerHTML = key;
            project.appendChild(option);
        }

    })();


    (function addButtonEvents() {

        const dialog = document.getElementById("dialog");
        const buttons = document.querySelectorAll(".add-button");
        buttons.forEach((btn) => {
            btn.addEventListener("click", () => {
                dialog.showModal();
            })
        });

    })();

}
