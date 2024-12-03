// Datepicker - from https://codepen.io/vsfvjiuv-the-typescripter/pen/mdMeJwL
$(document).ready(function () {
  $("#datepicker").datepicker();
});

// Booking form
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#details");
  const modal = new bootstrap.Modal(document.getElementById("detailsModal"));

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Fetching the service type (radio button)
    const serviceType = document.querySelector("input[name='service']:checked")
      ? document.querySelector("input[name='service']:checked")
          .nextElementSibling.textContent
      : "Not selected";

    // Fetching the dog size (radio button)
    const dogSize = document.querySelector("input[name='size']:checked")
      ? document.querySelector("input[name='size']:checked").nextElementSibling
          .textContent
      : "Not selected";

    // Fetching the location (radio button)
    const locationPick = document.querySelector(
      "input[name='location']:checked"
    )
      ? document.querySelector("input[name='location']:checked")
          .nextElementSibling.textContent
      : "Not selected";

    // Fetching the date
    const datePick = document.getElementById("date").value || "Not selected";

    // Fetching the time slot (radio button)
    const timePick = document.querySelector("input[name='picktime']:checked")
      ? document.querySelector("input[name='picktime']:checked")
          .nextElementSibling.textContent
      : "Not selected";

    // Form values
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const picktime = document.querySelector("input[name='picktime']:checked")
      .nextElementSibling.textContent;

    // Set modal values
    document.getElementById("modalService").textContent = serviceType;
    document.getElementById("modalLocation").textContent = locationPick;
    document.getElementById("modalSize").textContent = dogSize;
    document.getElementById("modalDate").textContent = datePick;
    document.getElementById("modalTime").textContent = timePick;
    document.getElementById("modalFirstname").textContent = firstName;
    document.getElementById("modalLastname").textContent = lastName;
    document.getElementById("modalPhone").textContent = phone;
    document.getElementById("modalEmail").textContent = email;
    document.getElementById("modalPicktime").textContent = picktime;

    modal.show();
  });
});
