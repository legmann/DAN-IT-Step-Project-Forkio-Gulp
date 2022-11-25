
const menu = document.getElementById('menu');
const button = document.querySelector(".menu-button");
const buttonImage = document.getElementById('btn-img');


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

  if (myWidth <= 768) {
    dislpay = "none";
  }
  menu.style.display = dislpay;
}
window.onresize = resized;
resized();


button.addEventListener('click', (event) => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    buttonImage.setAttribute("src", "./dist/img/menu-open-button.svg");

  } else {
    menu.style.display = 'block';
    buttonImage.setAttribute("src", "./dist/img/menu-close-button.svg");
  }
});