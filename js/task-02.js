const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const elements = ingredients.map(element => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = element;
  ingredientItem.classList.add("item");
  return ingredientItem
});

ingredientsList.append(...elements);