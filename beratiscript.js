document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("backToTop");
  const sections = document.querySelectorAll("section");

  const revealOnScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.classList.add("show");
      }
    });
  };

  const toggleBackToTop = () => {
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  };

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    revealOnScroll();
    toggleBackToTop();
  });

  revealOnScroll();
  toggleBackToTop();
});
