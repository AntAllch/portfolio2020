const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-link");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
});