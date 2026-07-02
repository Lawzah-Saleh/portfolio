const skillsSection = document.querySelector(".skills");

window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if(sectionPos < screenPos){
        skillsSection.classList.add("show");
    }
});

const projectsSection = document.querySelector(".projects");

window.addEventListener("scroll", () => {
    const sectionPos = projectsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if(sectionPos < screenPos){
        projectsSection.classList.add("show");
    }
});
const toggleBtn = document.getElementById("themeToggle");

// load saved theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
    toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Message sent successfully 🚀");

    form.reset();
});
const contactSection = document.querySelector(".contact");

window.addEventListener("scroll", () => {
    const pos = contactSection.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.3;

    if(pos < screen){
        contactSection.classList.add("show");
    }
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
});

// close menu when clicking a link
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 10){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
