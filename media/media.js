document.addEventListener("DOMContentLoaded", () => {
    const rajmetContainer = document.getElementById("rajmet-container");
    const csvContainer = document.getElementById("csv-container");
    const celebContainer = document.getElementById("celeb-container");
  
    // Rajasthan Centers' Meeting Videos
    for (let i = 1; i <= 6; i++) {
      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
        <div class="media-card" data-aos="fade-up">
          <video controls>
            <source src="../images/rajmet/${i}.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      `;
      rajmetContainer.appendChild(col);
    }
  
// CSV Rewards Distribution Images
for (let i = 1; i <= 9; i++) {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="media-card" data-aos="fade-up">
        <a href="../images/csv/${i}.jpeg" data-lightbox="csv" data-title="CSV Reward ${i}">
          <img src="../images/csv/${i}.jpeg" alt="CSV Reward ${i}" />
        </a>
      </div>
    `;
    csvContainer.appendChild(col);
  }  
  
// Celebrations

// video
const videoCol = document.createElement("div");
videoCol.className = "col-md-4";
videoCol.innerHTML = `
  <div class="media-card" data-aos="fade-up">
    <video controls class="img-fluid" style="border-radius: 12px; width: 100%; height: auto;">
      <source src="../images/celeb/0.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
`;
celebContainer.appendChild(videoCol);

// images
for (let i = 1; i <= 6; i++) {
  const col = document.createElement("div");
  col.className = "col-md-4";

  const ext = i <= 3 ? "jpg" : "jpeg";

  col.innerHTML = `
    <div class="media-card" data-aos="fade-up">
      <a href="../images/celeb/${i}.${ext}" data-lightbox="celebrations" data-title="Celebration ${i}">
        <img src="../images/celeb/${i}.${ext}" alt="Celebration ${i}" />
      </a>
    </div>
  `;
  celebContainer.appendChild(col);
}})

  