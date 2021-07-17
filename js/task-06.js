const input = document.querySelector('#validation-input');
const inputValueLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (input.value.length === inputValueLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        return;
    }
    input.classList.remove('valid');
    input.classList.add('invalid');
}