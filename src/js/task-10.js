function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls input");
const creatBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

creatBtn.addEventListener('click', onCreatBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreatBtnClick() { 
  const amount = Number(input.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxesEl = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const sizeInPx = `${30 + i * 10}px`;
      box.classList.add('box_element');
      box.style.width = sizeInPx;
      box.style.height = sizeInPx;
      box.style.backgroundColor = getRandomHexColor();
      boxesEl.push(box);
    };
  boxes.append(...boxesEl);
};

function onDestroyBtnClick() { 
  boxes.innerHTML = "";
  input.value = "";
};
