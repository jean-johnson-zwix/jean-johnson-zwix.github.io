// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay for siblings
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 80}ms`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll('[id]');
const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top <= 100) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      if (!link.classList.contains('nav__cta')) {
        link.style.color = 'var(--cream)';
      }
    }
  });
});

// Subtle parallax on hero photo
const heroPhoto = document.querySelector('.hero__photo-frame');
if (heroPhoto) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroPhoto.style.transform = `translateY(${scrollY * 0.04}px)`;
    }
  });
}

// Type effect for hero eyebrow (subtle)
const eyebrow = document.querySelector('.hero__eyebrow');
if (eyebrow) {
  const text = eyebrow.textContent.trim();
  eyebrow.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      eyebrow.textContent += text[i++];
      setTimeout(type, 40);
    }
  };
  setTimeout(type, 600);
}

function toggleOtherProjects() {
  const list = document.getElementById('other-projects-list');
  const label = document.getElementById('toggle-label');

  if (list.style.display === 'none') {
    list.style.display = 'grid';
    label.textContent = '− Hide Projects';
  } else {
    list.style.display = 'none';
    label.textContent = '+ Show More Projects';
  }
}
