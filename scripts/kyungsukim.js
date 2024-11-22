document.addEventListener("DOMContentLoaded", function () {
    // Button Toggle Functionality
    const singleButton = document.getElementById("single-donation");
    const monthlyButton = document.getElementById("monthly-donation");

    singleButton.addEventListener("click", function () {
        singleButton.classList.add("active");
        monthlyButton.classList.remove("active");
    });

    monthlyButton.addEventListener("click", function () {
        monthlyButton.classList.add("active");
        singleButton.classList.remove("active");
    });

    // Donation Amount Button Click Functionality
    const donationAmountButtons = document.querySelectorAll(".donation-amount");
    const donationInput = document.querySelector("input.form-control");
    const amountDisplay = document.querySelector(".display-5");

    donationAmountButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Remove the active state from all buttons
            donationAmountButtons.forEach((btn) => btn.classList.remove("active"));

            // Set the selected button to the active state
            button.classList.add("active");

            // update the displayed amount at the top with the selected button's amount
            const amount = button.textContent.trim(); // €25
            amountDisplay.textContent = amount;

            // reflect the same amount in the input field
            const numericValue = amount.replace("€", "").trim(); // numbers only
            donationInput.value = numericValue;
        });
    });

    // Update the displayed amount at the top when the input field value changes
    donationInput.addEventListener("input", function () {
        const inputAmount = donationInput.value;

        // Display the default value if the input field is empty or contains a negative number
        if (inputAmount === "" || parseFloat(inputAmount) <= 0) {
            amountDisplay.textContent = "€0";
        } else {
            amountDisplay.textContent = `€${inputAmount}`;
        }

        // Deactivate the active state of all amount buttons
        donationAmountButtons.forEach((btn) => btn.classList.remove("active"));
    });

    // Form switching functionality on the Next button click
    const nextButton = document.querySelector(".btn-warning.nav-link-last-item");
    const formStep1 = document.getElementById("donation-form-step-1");
    const formStep2 = document.getElementById("donation-form-step-2");

    nextButton.addEventListener("click", function () {
        // Hide the first form
        formStep1.classList.add("d-none");
        // Hide the Second form
        formStep2.classList.remove("d-none");
    });
});

//Phone number input
document.getElementById("phone-number").addEventListener("input", function (e) {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formatted = "";

    if (input.length > 0) {
        formatted = "(" + input.substring(0, 3);
    }
    if (input.length >= 4) {
        formatted += ") " + input.substring(3, 6);
    }
    if (input.length >= 7) {
        formatted += "-" + input.substring(6, 10);
    }

    e.target.value = formatted; // Set the formatted value
});


// Expired date
document.getElementById("card-number").addEventListener("input", function (e) {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formatted = input.match(/.{1,4}/g)?.join(" ") || ""; // Group into 4s and join with spaces
    e.target.value = formatted; // Set the formatted value
});

document.getElementById("expiry-date").addEventListener("input", function (e) {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formatted = "";

    if (input.length > 0) {
        formatted = input.substring(0, 2); // Get the first two digits
    }
    if (input.length >= 3) {
        formatted += "/" + input.substring(2, 4); // Add slash and next two digits
    }

    e.target.value = formatted; // Set the formatted value
});

//Security code input
const securityCode = document.getElementById("security-code");
const toggleCvv = document.getElementById("toggle-cvv");

toggleCvv.addEventListener("click", () => {
    if (securityCode.type === "password") {
        securityCode.type = "text";
        toggleCvv.textContent = "hide";
    } else {
        securityCode.type = "password";
        toggleCvv.textContent = "show";
    }
});