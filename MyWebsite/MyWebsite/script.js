
// ===== Welcome Message =====
function showWelcome() {
    alert("Welcome to Mohan's Portfolio! 🚀");
}

// ===== Typing Animation =====
const roles = [
    "Computer Science Student",
    "Software Developer",
    "AI/ML Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentRole.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }   

    setTimeout(typeEffect, speed);
}

typeEffect();

// ===== Current Year in Footer =====
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ===== Mobile Navigation =====
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigating to:", link.textContent);
    });
});

// ===== Project Card Interaction =====
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.cursor = "pointer";
    });
});

console.log("Mohan's Portfolio JavaScript loaded successfully!");
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});
const revealElements = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (section) {
    section.classList.add("reveal");
    revealObserver.observe(section);
});
