import Icon from './img/icon.svg'

export default function headerDOMLoader() {
    const logoDiv = document.getElementById("logo-div");
    const icon = new Image();
    icon.src = Icon;
    icon.id = "icon";
    logoDiv.appendChild(icon);

    const dialog = document.getElementById("dialog");
    const buttons = document.querySelectorAll(".add-button");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            dialog.showModal();
        })
    });
}

