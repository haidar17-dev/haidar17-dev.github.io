AOS.init({
  offset: 0,
  delay: 0,
  duration: 400
});

const navbar = document.getElementById('navs');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(from var(--bg-sec-color) r g b / 60%)';
    navbar.style.backdropFilter = 'blur(10px)';
    navbar.style.webkitBackdropFilter = 'blur(10px)';
    navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.backdropFilter = 'blur(0px)';
    navbar.style.webkitBackdropFilter = 'blur(0px)';
    navbar.style.boxShadow = 'none';
  }
});

const btn = document.getElementById('hamburgerBtn');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Change Hero's image

function changeImg(thumb) {
  const main = document.getElementById('main-img');
  main.style.opacity = 0;
  main.style.transform = 'scale(0.95)';
  setTimeout(() => {
    main.src = thumb.src;
    main.style.opacity = 1;
    main.style.transform = 'scale(1)';
  }, 300);
}

// Typewriter

const texts = ["Typing...", "High School Student"];
const speed = 155;
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        document.getElementById("typewriter").textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        const currentText = texts[textIndex].substring(0, charIndex - 1);
        document.getElementById("typewriter").textContent = currentText;
        charIndex--;
        setTimeout(eraseText, speed / 1); 
    } else {
        textIndex++;
        if (textIndex >= texts.length) textIndex = 0;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
