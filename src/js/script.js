const menu = document.getElementById('menu-mobile');
const button = document.querySelector(".menu-button");
const buttonImage = document.getElementById('btn-img');

button.addEventListener('click', (e) => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    buttonImage.setAttribute("src", "./dist/img/header/menu-open-button.png");
  } else {
    menu.style.display = 'block';
    buttonImage.setAttribute("src", "./dist/img/header/menu-close-button.png");
  }
});

document.addEventListener('click', (e) => {
  if (e.target !== buttonImage) {
    menu.style.display = 'none';
    buttonImage.setAttribute("src", "./dist/img/header/menu-open-button.png");
  }
});