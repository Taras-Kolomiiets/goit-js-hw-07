const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeIngredientsList = (array, selector) => {
  const newArray = array.map(item => {
    const newItem = document.createElement('li');
    newItem.textContent = item;
    return newItem;
  });

  return document.querySelector(selector).append(...newArray);
}

makeIngredientsList(ingredients, '#ingredients');

