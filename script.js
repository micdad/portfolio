document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo-svg");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    logo.style.animation = "draw 2s ease-in-out forwards, fadeInFill 1s ease-in-out 2s forwards";
                }
            });
        },
        { threshold: 0.5 } // Adjust trigger point
    );
    observer.observe(logo);
});

document.addEventListener("DOMContentLoaded", function () {
 const text = "Characters Built in Space. Stories Lived.";
 const mottoElement = document.getElementById("motto");
 let index = 0;

 function typeEffect() {
     if (index < text.length) {
         mottoElement.innerHTML += text.charAt(index);
         index++;
         setTimeout(typeEffect, 100); // Adjust speed here
     } else {
         mottoElement.classList.add("pulse"); // Add pulse effect after typing
     }
 }

 setTimeout(typeEffect, 1500); // Start typing after fade-in
});
