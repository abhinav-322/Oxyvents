const msg = document.querySelector('.msg');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const form = document.querySelector('#form');
form.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    if (email.value === '' || pass.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all fields';

        setTimeout(() => msg.remove(), 3000);
    }


}