// Popup functionality
document.querySelectorAll(".gallery-img").forEach((img, index) => {
  img.addEventListener("click", () => {
    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();

    // Set the carousel to the clicked image
    const carousel = document.getElementById("carouselExample");
    const bsCarousel = new bootstrap.Carousel(carousel);
    bsCarousel.to(index);
  });
});
