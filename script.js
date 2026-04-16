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