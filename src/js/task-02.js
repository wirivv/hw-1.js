const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsCreateElements = document.querySelector("#ingredients");
const markup = ingredients.map((ingredient) => {
  const ingreidentsCreateItem = document.createElement("li");
  ingreidentsCreateItem.classList.add("item");
  ingreidentsCreateItem.textContent = `${ingredient}`;
  return ingreidentsCreateItem;
})

markup.forEach((item) => {
  ingredientsCreateElements.appendChild(item)
});
console.log(ingredientsCreateElements);