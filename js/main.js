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

// Carousel
(function() {
    const carousel = document.getElementById("hero-carousel");
    if (!carousel) return;

    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const dots = carousel.querySelectorAll(".carousel-dot");
    const prev = carousel.querySelector(".carousel-arrow.prev");
    const next = carousel.querySelector(".carousel-arrow.next");

    let index = 0;
    const total = slides.length;
    const AUTO_MS = 5000;
    let timer = null;

    function go(to) {
        index = (to + total) % total;
        track.style.transform = "translateX(-" + (index * 100) + "%)";
        dots.forEach(function(d, i) {
            if (i === index) d.setAttribute("aria-current", "true");
            else d.removeAttribute("aria-current");
        });
    }

    function start() {
        stop();
        timer = setInterval(function() { go(index + 1); }, AUTO_MS);
    }

    function stop() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    prev.addEventListener("click", function() {
        go(index - 1);
        start();
    });
    next.addEventListener("click", function() {
        go(index + 1);
        start();
    });
    dots.forEach(function(d, i) {
        d.addEventListener("click", function() {
            go(i);
            start();
        });
    });

    // Pause on hover/focus, keyboard nav
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", start);
    carousel.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") {
            go(index - 1);
            start();
        }
        if (e.key === "ArrowRight") {
            go(index + 1);
            start();
        }
    });

    start();
})();