export default function (e, btn) {
    e.preventDefault;
    if (e.code === 'Enter') {
        btn.click();
    }
}