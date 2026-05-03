document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const nav = document.querySelector(".site-nav");

    if (!burger || !nav) return;

    burger.addEventListener("click", function() {
        const isOpen = nav.classList.toggle("active");
        burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
        burger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
});