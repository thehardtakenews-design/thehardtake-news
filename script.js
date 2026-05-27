// Dark/Light mode toggle
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
}

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

console.log('The Hard Take News - Ready');

