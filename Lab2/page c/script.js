'use strict';

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.addEventListener('DOMContentLoaded', function () {

    const form1 = document.getElementById('contact_form_1');
    const emailInput1 = document.getElementById('email_1');
    const resultBox1 = document.getElementById('result_1');
    const thankyou1 = document.getElementById('hidden_pix_1');

    if (form1) {
        form1.addEventListener('submit', function (e) {
            e.preventDefault();

            const emailVal = emailInput1.value.trim();

            if (!emailVal) {
                resultBox1.textContent = "Please enter your email.";
                resultBox1.style.color = "#ffcc00";
                return;
            }

            if (!isValidEmail(emailVal)) {
                resultBox1.textContent = "Email is not valid.";
                resultBox1.style.color = "#ff6666";
                return;
            }

            resultBox1.textContent = "";

            form1.style.display = "none";

            thankyou1.style.display = "block";

            thankyou1.scrollIntoView({ behavior: "smooth" });
        });
    }

    const form2        = document.getElementById('contact_form_2');
    const resultBox2   = document.getElementById('result_2');
    const thankyou2    = document.getElementById('hidden_pix_6');
    const fullNameInput = document.getElementById('name');
    const emailInput2   = document.getElementById('email_2');
    const phoneInput    = document.getElementById('number');
    const countrySelect = document.getElementById('countries');

    if (form2) {
        form2.addEventListener('submit', function (e) {
            e.preventDefault(); // không reload trang

            const nameVal    = fullNameInput.value.trim();
            const emailVal2  = emailInput2.value.trim();
            const phoneVal   = phoneInput.value.trim();
            const countryVal = countrySelect.value.trim();

            if (!nameVal) {
                resultBox2.textContent = "Please enter your full name.";
                resultBox2.style.color = "#ff6666";
                return;
            }

            if (!emailVal2 || !isValidEmail(emailVal2)) {
                resultBox2.textContent = "Please enter a valid email.";
                resultBox2.style.color = "#ff6666";
                return;
            }

            if (!phoneVal) {
                resultBox2.textContent = "Please enter your phone number.";
                resultBox2.style.color = "#ff6666";
                return;
            }

            if (!countryVal) {
                resultBox2.textContent = "Please select a country.";
                resultBox2.style.color = "#ff6666";
                return;
            }

            resultBox2.textContent = "";

            form2.style.display = "";

            thankyou2.style.display = "block";

            thankyou2.scrollIntoView({ behavior: "smooth" });
        });
    }
});