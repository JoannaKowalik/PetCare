document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector("#navbarNav");
    const content = document.querySelector("main");
    const footer = document.querySelector(".footer");
    const navbarContainer = document.querySelector(".container-fluid");
    const navbarBrand = document.querySelector(".navbar-brand");
    const contactForm = document.querySelector("#contactForm");
    const successMessageBlock = document.querySelector("#successMessageBlock");
    const successMessage = document.querySelector("#successMessage");

    burgerMenu.addEventListener("click", function() {
      navbarMenu.classList.toggle("active");
      
      content.classList.toggle("hidden");
      footer.classList.toggle("hidden");
      navbarContainer.classList.toggle("hidden");
      navbarBrand.classList.toggle("hidden");
    });

    contactForm.addEventListener("submit", function(e) {
      e.preventDefault(); 
    
      contactForm.classList.add("hidden"); 
      successMessage.classList.remove("hidden"); 
      successMessageBlock.classList.remove("hidden");
    });
  });