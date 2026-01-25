const images = [
    "../assets/background_img_9.jpg",
    "../assets/background_img_10.jpg",
    "../assets/background_img_11.jpg",
    "../assets/background_img_12.jpg",
];
let currentIndex = 0;
function changeBackground() {
    document.body.style.backgroundImage = `url("${images[currentIndex]}")`;
    currentIndex = (currentIndex + 1) % images.length;
}
changeBackground();
setInterval(changeBackground, 5000);
