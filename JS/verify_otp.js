const images = [
    "../assets/background_img_9.jpg",
    "../assets/background_img_10.jpg",
    "../assets/background_img_11.jpg",
    "../assets/background_img_12.jpg",
    "../assets/background_img_13.jpg"
];
let currentIndex = 0;
function changeBackground() {
    document.body.style.backgroundImage = `url("${images[currentIndex]}")`;
    currentIndex = (currentIndex + 1) % images.length;
}
changeBackground();
setInterval(changeBackground, 5000);


// auto-move for otp boxes
const inputs = document.querySelectorAll(".otp_input");
const submitBtn = document.querySelector(".otp_submit");

function allFilled() {
    return [...inputs].every(input => input.value.length === 1);
}
function toggleButton() {
    submitBtn.disabled = !allFilled();
}

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        // Allow only one character
        input.value = input.value.replace(/[^a-zA-Z0-9]/g, "");

        // Move to next input if value entered
        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }

        toggleButton();
    });

    input.addEventListener("keydown", (e) => {
        // Move back on Backspace if empty
        if (e.key === "Backspace" && !input.value && index > 0) {
            inputs[index - 1].focus();
        }
        setTimeout(toggleButton, 0);
    });
});


// raise focus on first input field on webpage load
window.addEventListener("load", () => {
    const firstInput = document.querySelector(".otp_input");
    if (firstInput) {
        firstInput.focus();
    }
});