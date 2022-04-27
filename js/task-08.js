const form = document.querySelector(".login-form");
const emailInput = document.querySelector(".login-form").firstElementChild.firstElementChild;
const passInput = document.querySelector(".login-form").firstElementChild.nextElementSibling.firstElementChild;;
const formInputs = [emailInput, passInput];

form.addEventListener("submit", OnFormSubmit);
    
function OnFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const pass = formElements.password.value;
    

    if (mail === '' || pass === '') {
        window.alert("всі поля повинні бути заповнені");
    } else {
        const formObj = { mail, pass };
        console.log(formObj);
    };
    form.reset();
};
