const logRegBox = document.querySelector('log-reg-box');
const loginLink = document.querySelector('login-link');
const registerLink = document.querySelector('register-link');

registerLink.addEventListener('click', () =>{
    logRegBox.classList.add('active');
});