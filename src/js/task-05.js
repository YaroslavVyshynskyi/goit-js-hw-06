const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

function onInput(event) {
    outputName.textContent = event.currentTarget.value.trim() || "Anonymous";
}

inputName.addEventListener('input', onInput);