const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const currentYear = document.getElementById("current-year");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isExpanded);
    menuToggle.textContent = isExpanded ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

currentYear.textContent = new Date().getFullYear();