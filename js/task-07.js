const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener('input', handleInputRange);

function handleInputRange(event) { 
    span.style.fontSize = input.value + "px";
};
