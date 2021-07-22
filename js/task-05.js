const input = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

input.addEventListener('input', onInputChange)

function onInputChange(event) {
    name.textContent = event.currentTarget.value.trim() || 'незнакомец';
};