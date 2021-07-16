let images = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg', 'img/slide4.jpg', 'img/slide5.jpg'];

let x = 0;
    
let imgs = document.getElementById('sliderImg');
let bgCon = document.getElementsByClassName('sliderConatiner')
    
setInterval(slider, 4000);
    
    
function slider() {
    
if (x < images.length) {
 x = x + 1;
} else {
 x = 1;
}
    
    
 imgs.innerHTML = "<img src=" + images[x - 1] + ">";
    
    
}
