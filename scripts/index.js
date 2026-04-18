const view = document.querySelector('.view');
const orderBtn = document.getElementsByClassName('.order');
const orders = document.getElementById("orders")

orders.addEventListener('click', () => {
    window.location.href = 'menu.html';
});




view.addEventListener('click', () => {
    window.location.href = 'menu.html';
});


const yearSpan = document.querySelector('#year');
yearSpan.textContent = new Date().getFullYear();