document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // MOBILE MENU
  if (menuToggle && navLinks) {
    menuToggle.onclick = () => {
      navLinks.classList.toggle("active");

      if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
      } else {
        menuToggle.textContent = "☰";
      }
    };

    // CLOSE MENU AFTER CLICKING A LINK
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.onclick = () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
      };
    });
  }

  // SCROLL ANIMATION
  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        element.classList.add("active");
      }
    });
  });
});
