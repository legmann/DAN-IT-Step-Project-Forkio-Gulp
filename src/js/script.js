const menu = document.getElementById('menu');
const button = document.querySelector(".menu-button");
const buttonImage = document.getElementById('btn-img');


document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes('menu');

  if (!withinBoundaries && menu.style.display === 'block') {
    menu.style.display = 'none';
    buttonImage.setAttribute("src", "./dist/img/header/menu-open-button.png");
  } else {
    menu.style.display = 'block';
    buttonImage.setAttribute("src", "./dist/img/header/menu-open-button.png");
  }
})


document.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) {
    menu.style.display = 'none';
  }
});


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