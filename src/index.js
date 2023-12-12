import './reset.css';
import './style.css';
import dialogLoader from './dialog-loader.js';
import headerDOMLoader from './header-loader.js';
import mainboardLoader from './mainboard-loader.js';

document.addEventListener('DOMContentLoaded', () => {
    headerDOMLoader();
    mainboardLoader();
    dialogLoader();
})
