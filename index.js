// NAVBAR SCROLL
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// MOBILE MENU 
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// SCROLL REVEAL 
const reveals = document.querySelectorAll('section > .section-inner > *, .hero-text > *, .hero-image-wrap');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-group, .stat-card, .about-text, .about-stats, .section-title, .section-label, .contact-grid, .contact-intro').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ACTIVE NAV LINK
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});
