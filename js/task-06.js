const input = document.querySelector("#validation-input");

input.addEventListener('input', onInput);

function onInput(event) {
    input.addEventListener("blur", () => {
        input.className = '';
        if (input.value.length >= input.dataset.length)
        {
            input.classList.add("valid");
        }
        else {
            input.classList.add("invalid");
        }
    });
};
