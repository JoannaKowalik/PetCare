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

    // Fetching the radio button inputs
    const serviceType = $("#service input:radio:checked").val();
    const dogSize = $("#dogsize input:radio:checked").val();
    const locationPick = $("#locationPick input:radio:checked").val();
    const timePick = $("#timePick input:radio:checked").val();

    // Form values
    const datePick = document.getElementById("date").value || "Not selected";
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
