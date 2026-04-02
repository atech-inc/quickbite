const view = document.querySelector('.view');
const orderBtn = document.querySelector('.order');

orderBtn.addEventListener('click', () => {
    window.location.href = 'menu.html';
});

view.addEventListener('click', () => {
    window.location.href = 'restaurant.html';
});