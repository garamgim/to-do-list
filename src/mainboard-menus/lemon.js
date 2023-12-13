import Lemon from "../img/lemon.svg"

export default function () {
    const div = document.getElementById("lemon-board");
    const lemon = new Image();
    lemon.src = Lemon;
    lemon.id = "lemon-img";
    lemon.className = "show-lemon";
    div.appendChild(lemon);
}