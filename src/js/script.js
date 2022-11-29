const menu = document.getElementById('menu');
const button = document.querySelector(".menu-button");
const buttonImage = document.getElementById('btn-img');

button.addEventListener('click', (e) => {
  //можна зробити тут анімацію з додаванням класів тоді меню буде відкриватися красиво, якщо хочеш я тобі з цим допоможу
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    buttonImage.setAttribute("src", "./dist/img/header/menu-open-button.png");
  } else {
    menu.style.display = 'block';
    buttonImage.setAttribute("src", "./dist/img/header/menu-close-button.png");
  }
});

// Resized window function
function resized() {
  let myWidth = 0,
    myHeight = 0,
    dislpay = "block";

  if (typeof (window.innerWidth) == 'number') {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }

  if (myWidth <= 480) {
    dislpay = "none";

    // document.addEventListener('click', (e) => {
    //   if (e.target !== buttonImage) {
    //     menu.style.display = 'none';
    //     buttonImage.setAttribute("src", "./dist/img/header/menu-open-button.png");
    //   }
    // });

  }
  menu.style.display = dislpay;
}
window.onresize = resized;
resized();