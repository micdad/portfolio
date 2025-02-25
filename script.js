document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const motto = document.getElementById("motto");
        motto.classList.add("show-motto");
        typeEffect(motto, "Characters Built in Space. Stories Lived.");
    }, 2000); // Wait for logo animation to finish
});

function typeEffect(element, text, speed = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
