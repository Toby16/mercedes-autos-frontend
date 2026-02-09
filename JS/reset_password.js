const images = [
    "../assets/background_img_14.jpg",
    "../assets/background_img_15.jpg",
    "../assets/background_img_16.jpg",
    "../assets/background_img_17.jpg"
];
let currentIndex = 0;
function changeBackground() {
    document.body.style.backgroundImage = `url("${images[currentIndex]}")`;
    currentIndex = (currentIndex + 1) % images.length;
}
changeBackground();
setInterval(changeBackground, 5000);


// to toggle new_password input field between hidden & revealed
const new_password = document.getElementById("new_password");
const toggle_new_password = document.getElementById("toggleNewPassword");
toggle_new_password.addEventListener("click", () => {
    const isPassword = new_password.type === "password";
    new_password.type = isPassword ? "text" : "password";
    toggle_new_password.textContent = isPassword ? "👁" : "👁";
});

// to toggle confirm_password input field between hidden & revealed
const confirm_password = document.getElementById("confirm_password");
const toggle_confirm_password = document.getElementById("toggleconfirmPassword");
toggle_confirm_password.addEventListener("click", () => {
    const isPassword = confirm_password.type === "password";
    confirm_password.type = isPassword ? "text" : "password";
    toggle_confirm_password.textContent = isPassword ? "👁" : "👁";
});

