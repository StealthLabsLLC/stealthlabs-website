document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const header = document.querySelector(".header");
  const pricing = document.querySelector(".pricing");
  const strip = document.querySelector(".fade-strip");
  const hero = document.querySelector(".hero");

  // =========================
  // HERO PARALLAX
  // =========================
  if (hero) {
    window.addEventListener("scroll", () => {
      let scrollPosition = window.scrollY;
      hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    });
  }

  // =========================
  // FADE-UP ANIMATIONS
  // =========================
  const elements = document.querySelectorAll('.fade-up');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => fadeObserver.observe(el));

  // =========================
  // MOBILE MENU
  // =========================
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();

      mobileMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    const links = mobileMenu.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        hamburger.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }

  // =========================
  // HEADER SCROLL EFFECT
  // =========================
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // =========================
  // PRICING ANIMATION
  // =========================
  if (pricing) {
    window.addEventListener('scroll', () => {
      const rect = pricing.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        pricing.classList.add('show');
      }
    });
  }

  // =========================
  // VALUE STRIP (REPLAYABLE)
  // =========================
  if (strip) {
    const stripObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          strip.classList.remove('show');
          void strip.offsetWidth;
          strip.classList.add('show');
        } else {
          strip.classList.remove('show');
        }
      });
    }, { threshold: 0.4 });

    stripObserver.observe(strip);
  }

});


// =========================
// CLICK OUTSIDE TO CLOSE
// =========================
document.addEventListener("click", (e) => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!mobileMenu || !hamburger) return;

  if (
    mobileMenu.classList.contains("active") &&
    !mobileMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});


// =========================
// ESC KEY CLOSE
// =========================
document.addEventListener("keydown", (e) => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (e.key === "Escape" && mobileMenu) {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});

window.addEventListener("message", function(event) {
  const iframe = document.getElementById("bookingFrame");

  if (!iframe) return;

  // GHL sends height updates — catch them ALL
  if (event.data && typeof event.data === "object") {

    // Handle multiple possible message formats
    if (event.data.height) {
      iframe.style.height = event.data.height + "px";
    }

    if (event.data.event === "setHeight") {
      iframe.style.height = event.data.height + "px";
    }

    if (event.data.type === "iframeHeight") {
      iframe.style.height = event.data.height + "px";
    }
  }
});