function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const div = document.querySelector(".widget");
const span = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener('click', changeColor);

function changeColor() { 
  const color = getRandomHexColor();
  div.style.backgroundColor = color;
  span.innerHTML = color;
};
