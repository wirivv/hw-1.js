const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const potatoes = ingredients[0];

function liPotatoes(potatoes) {
  const liPotatoes = document.createElement('li');
  liPotatoes.textContent = potatoes;
  return liPotatoes;
}

const potatoesListItem = liPotatoes(potatoes);
console.log(potatoesListItem)

const mushrooms = ingredients[1];

function liMushrooms(mushrooms) {
  const liMushrooms = document.createElement('li');
  liMushrooms.textContent = mushrooms;
  return liMushrooms;
} 

const mushroomsListItem = liMushrooms(mushrooms)
console.log(mushroomsListItem);