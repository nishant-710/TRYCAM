document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("testimonial-container");
  
    for (let i = 1; i <= 8; i++) {
      const card = document.createElement("div");
      card.className = "testimonial-card";
  
      if (i <= 3) {
        card.innerHTML = `
          <a href="../images/testimonials/${i}.jpg" data-lightbox="testimonials" data-title="Testimonial ${i}">
            <img src="../images/testimonials/${i}.jpg" alt="Testimonial ${i}">
          </a>
        `;
      } else {
        card.innerHTML = `
          <video controls>
            <source src="../images/testimonials/${i}.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        `;
      }
  
      container.appendChild(card);
    }
  });
  