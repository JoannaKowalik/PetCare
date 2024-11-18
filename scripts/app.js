document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector("#navbarNav");
    const content = document.querySelector("main");
    const footer = document.querySelector(".footer");
    const navbarContainer = document.querySelector(".container-fluid");
    const navbarBrand = document.querySelector(".navbar-brand");

    burgerMenu.addEventListener("click", function() {
      // Тогл класу для відображення бургер-меню
      navbarMenu.classList.toggle("active");
      
      // Тогл класу для видалення видимості всіх інших елементів
      content.classList.toggle("hidden");
      footer.classList.toggle("hidden");
      navbarContainer.classList.toggle("hidden");
      navbarBrand.classList.toggle("hidden");
    });
  });