/*=============== Toggle Icon Navbar ===============*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*=============== Scroll Sections Active Link ===============*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

window.onscroll = () => {
  const scrollY = window.scrollY;

  sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  // Sticky header
  header.classList.toggle('sticky', scrollY > 100);

  // Close mobile menu on scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/*=============== Auto-Close Navbar on Link Click ===============*/
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

/*=============== Scroll Reveal ===============*/
ScrollReveal({
  reset: false,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=============== Typed.js (wrapped in DOMContentLoaded) ===============*/
document.addEventListener('DOMContentLoaded', () => {
  new Typed('.multiple-text', {
    strings: ['Coffee into Code', 'Engineering Ideas', 'Debugging IRL'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});

/*=============== Dark Mode Toggle ===============*/
const darkToggle = document.createElement('button');
darkToggle.innerHTML = '🌓';
darkToggle.style.position = 'fixed';
darkToggle.style.bottom = '20px';
darkToggle.style.right = '20px';
darkToggle.style.zIndex = '999';
darkToggle.style.background = '#fff';
darkToggle.style.border = 'none';
darkToggle.style.padding = '10px';
darkToggle.style.borderRadius = '50%';
darkToggle.style.cursor = 'pointer';
darkToggle.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
document.body.appendChild(darkToggle);

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
};

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Apply saved preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}
