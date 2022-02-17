// ivadas i Events
//skaidres is CAO ; Even MDN 

/*function pasisveikinti(vardas, pavarde, kalba) {
    if (kalba === 'lt') {
        return `Labas, ${vardas} ${pavarde}`;
    } else {
        return `Hi, ${vardas} ${pavarde}`;
    }
}
console.log(pasisveikinti)*/

// addEventListener - ivykio reporteris, kada ivyks click
//

/*const input = document.querySelector('input')
input.addEventListener('change', irasas)

function irasas(event) {
    // alert(event.target.value)
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)

}*/

// const element = document.querySelector('input')
// const mygtukas = document.querySelector('button')
// mygtukas.addEventListener('click', rodyti)

// function rodyti(event) {
//     console.log(element.value)
//     element.value = ''
// }

const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');

form.addEventListener('submit', pateikimas);

function pateikimas(event) {
    event.preventDefault();
    console.log(input.value);
}












/*const mygtukas = document.querySelector('button')
mygtukas.addEventListener('click', paspaudimas)

function paspaudimas() {
    alert('pavyko')
}*/