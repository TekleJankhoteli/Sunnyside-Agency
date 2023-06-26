const burgerImg = document.getElementById('burgerImg');
const burgerMeniu = document.getElementById('burgermeniu');

burgerImg.addEventListener('click', () => {
    if (burgerMeniu.style.display === 'none') {
        burgerMeniu.style.display = 'flex';
    } else {
        burgerMeniu.style.display = 'none';
    }
});
