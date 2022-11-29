const menu = document.getElementById('menu-mobile');
const button = document.querySelector(".menu-button");
const buttonImage = document.getElementById('btn-img');
const buttonSmallImg = document.querySelector(".menu-button__stick_small");
const buttonSecondBigImg = document.querySelector(".menu-button__stick_big_2");
const buttonFirstBigImg = document.querySelector(".menu-button__stick");

button.addEventListener('click', (e) => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    buttonImage.setAttribute("src", "./dist/img/header/menu-open-button.png");
    buttonSmallImg.classList.add("animation1_reverse")
  } else {
    menu.style.display = 'block';
    buttonSmallImg.classList.add("animation1");
    buttonSecondBigImg.classList.add("animation3")
    buttonFirstBigImg.classList.add("animation2")
    // buttonImage.setAttribute("src", "./dist/img/header/menu-close-button.png");
  }
});

document.addEventListener('click', (e) => {
  if (e.target !== buttonImage) {
    menu.style.display = 'none';
    buttonImage.setAttribute("src", "./dist/img/header/menu-open-button.png");
  }
});