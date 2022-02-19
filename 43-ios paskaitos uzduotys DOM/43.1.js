const ul = document.querySelector('ul')
let pasirinkimas = ''
const phones = [
    'samsung',
    'nokia',
    'iphone'
]

phones.forEach(createInput);
renderList(phones)

function renderList(x) {
    ul.innerHTML = '';
    x.forEach(createListItem);
}

function createInput(telefonas) {
    const input = document.createElement('input')
    const label = document.createElement('label')

    input.addEventListener('change', filterCatalogue)
    input.setAttribute('name', 'phone')
    input.setAttribute('value', telefonas)
    input.setAttribute('type', 'radio')

    label.innerHTML = telefonas
    label.appendChild(input)

    const form = document.querySelector('form')
    form.appendChild(label)
}

function createListItem(telefonas) {
    const li = document.createElement('li')
    li.innerHTML = telefonas;

    ul.appendChild(li)
}

function filterCatalogue(event) {
    pasirinkimas = event.target.value
    const filteredPhones = phones.filter(phoneFilter)
    renderList(filteredPhones)
}

function phoneFilter(verte) {
    return verte === pasirinkimas
}