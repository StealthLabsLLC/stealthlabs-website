// HERO PARALLAX (SAFE)
const hero = document.querySelector('.hero');

if (hero) {
  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";
  });
}


// FADE-UP ANIMATIONS
document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll('.fade-up');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => fadeObserver.observe(el));

});


// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}


// HEADER SCROLL EFFECT
const header = document.querySelector(".header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}


// PRICING ANIMATION
const pricing = document.querySelector('.pricing');

if (pricing) {
  window.addEventListener('scroll', () => {
    const rect = pricing.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      pricing.classList.add('show');
    }
  });
}


// VALUE STRIP (REPLAYABLE)
const strip = document.querySelector('.fade-strip');

if (strip) {
  const stripObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        // FORCE reset animation
        strip.classList.remove('show');
        void strip.offsetWidth; // 👈 this is the magic line
        strip.classList.add('show');

      } else {
        strip.classList.remove('show');
      }
    });
  }, {
    threshold: 0.4
  });

  stripObserver.observe(strip);
}