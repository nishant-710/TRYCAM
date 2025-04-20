document.querySelectorAll(".center-title").forEach((title) => {
  title.addEventListener("click", () => {
    const details = title.nextElementSibling;
    details.classList.toggle("show");
  });
});