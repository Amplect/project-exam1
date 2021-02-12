const form = document.querySelector("#form");
const firstname = document.querySelector("#firstname");
const firstnameError = document.querySelector("#firstnameError");
const lastname = document.querySelector("#lastname");
const lastnameError = document.querySelector("#lastnameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const successMessage = document.querySelector("#successMessage");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstname.value, 1) === true) {
        firstnameError.style.display = "none";
    } else {
        firstnameError.style.display = "block";
    }

    if (checkLength(lastname.value, 1) === true) {
        lastnameError.style.display = "none";
    } else {
        lastnameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    function displayMessage() {
        if (
            firstnameError.style.display === "none" &&
            lastnameError.style.display === "none" &&
            emailError.style.display === "none" &&
            messageError.style.display === "none"
        ) {
            successMessage.innerHTML = `<div class="successmessage">Your message was sent!</div>`;
            form.reset();
        } else {
            successMessage.innerHTML = "";
        }
    }

    displayMessage();
}

form.addEventListener("submit", validateForm);

function checkLength (value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}