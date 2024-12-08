// worked by Kungsu Kim //
document.addEventListener("DOMContentLoaded", function () {
    // button toggle
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

    // bonation amount button
    const donationAmountButtons = document.querySelectorAll(".donation-amount");
    const donationInput = document.querySelector("input.form-control");
    const amountDisplay = document.querySelector(".display-5");

    donationAmountButtons.forEach((button) => {
        button.addEventListener("click", function () {
            donationAmountButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            const amount = button.textContent.trim(); // €25
            amountDisplay.textContent = amount;
            const numericValue = amount.replace("€", "").trim();
            donationInput.value = numericValue;
        });
    });

    donationInput.addEventListener("input", function () {
        const inputAmount = donationInput.value;

        if (inputAmount === "" || parseFloat(inputAmount) <= 0) {
            amountDisplay.textContent = "€0";
        } else {
            amountDisplay.textContent = `€${inputAmount}`;
        }
        donationAmountButtons.forEach((btn) => btn.classList.remove("active"));
    });

    // form switching next button click
    const nextButton = document.querySelector(".btn-warning.nav-link-last-item");
    const formStep1 = document.getElementById("donation-form-step-1");
    const formStep2 = document.getElementById("donation-form-step-2");

    nextButton.addEventListener("click", function () {
        // hide first form
        formStep1.classList.add("d-none");
        // hide second form
        formStep2.classList.remove("d-none");
    });
});

//phone number
document.getElementById("phone-number").addEventListener("input", function (e) {
    let input = e.target.value.replace(/\D/g, "");
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

    e.target.value = formatted;
});

// card expired date
document.getElementById("card-number").addEventListener("input", function (e) {
    let input = e.target.value.replace(/\D/g, "");
    let formatted = input.match(/.{1,4}/g)?.join(" ") || "";
    e.target.value = formatted; 
});

document.getElementById("expiry-date").addEventListener("input", function (e) {
    let input = e.target.value.replace(/\D/g, "");
    let formatted = "";

    if (input.length > 0) {
        formatted = input.substring(0, 2);
    }
    if (input.length >= 3) {
        formatted += "/" + input.substring(2, 4);
    }

    e.target.value = formatted;
});

//security code
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