const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const creatElement = ingredients.forEach(element => { 
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  document.querySelector("#ingredients").append(li);
  console.log(li);
});
