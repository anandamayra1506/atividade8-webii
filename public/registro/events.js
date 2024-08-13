import { realizaLogin } from './registro.js';

const btLogin = document.querySelector('form button');
btLogin.addEventListener('click', (e) => {
    e.preventDefault();
    realizaRegistro();
    realizaLogin();
});
