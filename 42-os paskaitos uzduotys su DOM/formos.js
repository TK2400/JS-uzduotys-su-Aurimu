const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');

form.addEventListener('submit', pateikimas);

function pateikimas(event) {
    event.preventDefault();
    console.log(input.value);
}
