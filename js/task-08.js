const boxesContainer = document.querySelector('#boxes');
const input = document.querySelector('[type="number"]');
const renderBtn = document.querySelector('[data-action="render"]');
const clearBtn = document.querySelector('[data-action="destroy"]');

renderBtn.addEventListener("click", getAmount);
clearBtn.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = Number(input.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
      const div = document.createElement("div");
      div.style.width = size + 'px';
      div.style.height = size + 'px';
      div.style.margin = '10px';
      div.style.backgroundColor = `rgb(${random()} , ${random()} , ${random()})`;
    fragment.appendChild(div);
  }
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}