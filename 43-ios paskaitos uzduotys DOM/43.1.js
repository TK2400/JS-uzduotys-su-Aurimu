const phones = [
    'samsung',
    'nokia',
    'iphone',
    'sony',
    'xphone',
]

/*createInput(phones[0])
createInput(phones[1])
createInput(phones[2])*/ // tai butu analogiskas uzrasymas forEach


phones.forEach(createInput);
phones.forEach(list)
phones.filter(showOnly)


function createInput(telefonas) {
    const input = document.createElement('input')
    const label = document.createElement('label')
    input.setAttribute('name', 'phone')
    input.setAttribute('value', telefonas)
    input.setAttribute('type', 'radio')
    label.innerHTML = telefonas
    label.appendChild(input)
    const form = document.querySelector('form')
    form.appendChild(label)
}


function list(telefonas) {
    const p = document.createElement('p')
    p.innerHTML = telefonas
    const div = document.querySelector('div')
    div.appendChild(p)

}


// Aurimo sprendimas

function createList(telefonas) {
    const ul = document.querySelector('ul')
    const li = document.querySelector('li')
    li.innerHTML = telefonas;
    ul.appendChild(li)
}


function showOnly(telefonas) {
    //     const p = document.createElement('p')
    //     p.innerHTML = telefonas
    //     const div = document.querySelector('div')
    //     div.appendChild(p)
    // 
}