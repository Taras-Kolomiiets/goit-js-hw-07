const input = document.querySelector('#validation-input');
const inputValueLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === inputValueLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
        return;
    }
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
}