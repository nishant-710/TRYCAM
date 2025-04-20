// Scroll Animation for Fade-In Effect

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
    }
  );

  fadeElements.forEach((el) => {
    appearOnScroll.observe(el);
  });
});
