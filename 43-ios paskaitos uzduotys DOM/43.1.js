const phones = [
    'aphone',
    'bphone',
    'cphone',

]

/*createInput(phones[0])
createInput(phones[1])
createInput(phones[2])*/ // tai butu analogiskas uzrasymas forEach


phones.forEach(createInput)

function createInput(telefonas) {
    console.log(telefonas)

    const input = document.createElement('input')
    const label = document.createElement('label')
    input.setAttribute('name', 'phone')
    input.setAttribute('value', telefonas)
    input.setAttribute('type', 'radio')

    label.innerHTML = telefonas
    label.appendChild(input)

    console.log(label)
    const form = document.querySelector('form')
    form.appendChild(label)



}