const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});


document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }

    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => observer.observe(el));

});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  document.querySelector(".header").classList.toggle("scrolled", window.scrollY > 50);
});

const pricing = document.querySelector('.pricing');

window.addEventListener('scroll', () => {
  const rect = pricing.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    pricing.classList.add('show');
  }
});