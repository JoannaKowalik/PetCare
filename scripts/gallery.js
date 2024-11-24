// JavaScript for Modal and Navigation
const galleryImages = document.querySelectorAll(".gallery-img");
const modalImage = document.getElementById("modalImage");
const modal = new bootstrap.Modal(document.getElementById("galleryModal"));
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Open Modal and Display Selected Image
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    updateModalImage();
    modal.show();
  });
});

// Update Modal Image
const updateModalImage = () => {
  modalImage.src = galleryImages[currentIndex].src;
};

// Navigation Buttons
prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  updateModalImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  updateModalImage();
});

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
  if (!modal._isShown) return; // Ensure modal is open
  if (e.key === "ArrowLeft") prevBtn.click();
  if (e.key === "ArrowRight") nextBtn.click();
});
