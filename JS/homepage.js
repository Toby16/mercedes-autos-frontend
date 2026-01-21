const images = [
    "../assets/background_img_1.jpg",
    "../assets/background_img_2.jpg",
    "../assets/background_img_3.jpg",
    "../assets/background_img_4.jpg"
];
let currentIndex = 0;
function changeBackground() {
    document.body.style.backgroundImage = `url("${images[currentIndex]}")`;
    currentIndex = (currentIndex + 1) % images.length;
}
changeBackground();
setInterval(changeBackground, 5000);
