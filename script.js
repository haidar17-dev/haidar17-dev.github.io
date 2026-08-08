// Navbar background on scroll
const navbar = document.getElementById('navs');

function handleScroll() {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', handleScroll);
handleScroll();

// Mobile menu toggle
const btn = document.getElementById('hamburgerBtn');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', false);
    });
});

// Typewriter (terminal-style role rotator)
const texts = ["Junior Web Developer","High School Student", "\"Eureka\" moment"];
const speed = 65;
const pause = 1600;
let textIndex = 0;
let charIndex = 0;
const el = document.getElementById('typewriter');

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        el.textContent = texts[textIndex].substring(0, charIndex + 1) + '_';
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, pause);
    }
}

function eraseText() {
    if (charIndex > 0) {
        charIndex--;
        el.textContent = texts[textIndex].substring(0, charIndex) + '_';
        setTimeout(eraseText, speed / 2);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

// Reveal sections on scroll
const revealTargets = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealTargets.forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
});