const form = document.querySelector(".login-form");
const emailInput = document.querySelector(".login-form").firstElementChild.firstElementChild;
const passInput = document.querySelector(".login-form").firstElementChild.nextElementSibling.firstElementChild;;
const formInputs = [emailInput, passInput];

form.addEventListener("submit", OnFormSubmit);
    
function OnFormSubmit(event) {
    event.preventDefault();
    
    formInputs.forEach(input => {
        if (input.value === '') {
            window.alert("всі поля повинні бути заповнені");
        }
    });
    
    const {
    elements: { email, password }
    } = event.currentTarget;
    console.log("email:", email.value, "|", "password:", password.value);

    const formData = new FormData(event.currentTarget);

    form.reset();
};
