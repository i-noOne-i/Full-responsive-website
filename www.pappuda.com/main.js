// Scroll Indicator
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
}
// --------Slider--------


let images = ['img/s1.jpg', 'img/s2.jpg', 'img/s3.jpg', 'img/s4.jpg', 'img/s5.jpg'];

let x = 0;
    
let imgs = document.getElementById('img');
    
setInterval(slider, 5000);
    
    
function slider() {
    
if (x < images.length) {
 x = x + 1;
} else {
 x = 1;
}
    
    
 imgs.innerHTML = "<img src=" + images[x - 1] + ">";
    
    
}
// Hamburger Menu
const menu = document.querySelector("#mobileMenu");
const menuLinks = document.querySelector(".list");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});