document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
  
    // Event delegation for image click
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("certificate-img") || event.target.classList.contains("project-img")) {
        lightboxImg.src = event.target.src;
        lightbox.style.display = "flex";
      }
    });
  
    // Close lightbox when clicking the close button
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  
    // Close lightbox with Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        lightbox.style.display = "none";
      }
    });
  });