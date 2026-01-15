// script.js

// Défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation des compétences au scroll
const skillBars = document.querySelectorAll('.skill-bar');
skillBars.forEach(bar => {
    bar.style.width = '0%';
});

window.addEventListener('scroll', function() {
    skillBars.forEach(bar => {
        if (isElementInViewport(bar)) {
            bar.style.width = bar.getAttribute('data-width');
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Mode sombre/clair
const modeToggle = document.createElement('div');
modeToggle.className = 'mode-toggle';
modeToggle.innerHTML = '<i class="bi bi-moon"></i>';
modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    icon.className = document.body.classList.contains('dark-mode') ? 'bi bi-sun' : 'bi bi-moon';
});
document.querySelector('.navbar').appendChild(modeToggle);
