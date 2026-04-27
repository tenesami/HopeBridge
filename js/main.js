document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const nav = document.querySelector(".site-nav");

    if (burger && nav) {
        burger.addEventListener("click", function() {
            nav.classList.toggle("active");
        });
    }
});