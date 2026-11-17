// Navbar: tambah latar saat scroll
const navbar = document.getElementById('navs');

function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

// Menu mobile
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

// Toggle dark / light mode (default: light)
const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;

function syncThemeBtn() {
    const dark = root.getAttribute('data-theme') === 'dark';
    themeBtn.setAttribute('aria-pressed', dark);
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
}
syncThemeBtn();

themeBtn.addEventListener('click', () => {
    const toDark = root.getAttribute('data-theme') !== 'dark';
    if (toDark) root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    try { localStorage.setItem('theme', toDark ? 'dark' : 'light'); } catch (e) {}
    syncThemeBtn();
});