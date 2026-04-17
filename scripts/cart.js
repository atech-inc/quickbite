const orderBtn = document.querySelector('.order');

orderBtn.addEventListener('click', () => {
    window.location.href = 'menu.html';
});

document.addEventListener("DOMContentLoaded", ()=>{
    const saved = localStorage.getItem("cart")
    const cartObj = JSON.parse(saved)
    console.log(cartObj)
})