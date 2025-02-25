// script.js
document.addEventListener("DOMContentLoaded", function () {
    const text = "Characters Built in Space. Stories Lived.";
    const mottoElement = document.getElementById("motto");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            mottoElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50); // Adjusted typing speed
        } else {
            mottoElement.classList.add("pulse");
        }
    }

    setTimeout(typeEffect, 1500); // Start typing after fade-in
});
