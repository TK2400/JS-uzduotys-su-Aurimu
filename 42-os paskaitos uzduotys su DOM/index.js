// Input events
const input = document.querySelector('input');
input.addEventListener('input', irasas);
function irasas(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
}

// Button events
const mygtukas = document.querySelector('button');
mygtukas.addEventListener('click', paspaudimas);
function paspaudimas(event) {
    console.log(event);
    document.body.style.backgroundColor = 'black';
}