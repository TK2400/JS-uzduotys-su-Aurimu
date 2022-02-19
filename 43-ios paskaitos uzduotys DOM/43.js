// Mano spredimas

const form = document.querySelector('form');
const input1 = document.getElementById('input1')
    // console.log(nameSurname.value)
const input2 = document.getElementById('input2')
    // const message = document.getElementById('message')


const button = document.getElementById('button')
form.addEventListener('submit', submiting)

function submiting(event) {
    event.preventDefault()

    const p = document.createElement('p')
    form.appendChild(p)
    p.innerHTML = Number(input1.value) + Number(input2.value)
    input1.value = ''
    input2.value = ''

}

//Aurimo sprendimas
/*const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const surnameInput = document.querySelector('input[name="surname"]');
const subjectInput = document.querySelector('input[name="subject"]');
const textArea = document.querySelector('textarea');

form.addEventListener('submit', pateikimas);

function pateikimas(event) {
    event.preventDefault();

    spaustuve(nameInput.value, surnameInput.value, subjectInput.value, textArea.value);
}

function spaustuve(nameValue, surnameValue, subjectValue, messageValue) {
    const div = document.createElement('div');

    const pName = document.createElement('p');
    const pSurname = document.createElement('p');
    const pSubject = document.createElement('p');
    const pMessage = document.createElement('p');

    pName.innerHTML = nameValue;
    pSurname.innerHTML = surnameValue;
    pSubject.innerHTML = subjectValue;
    pMessage.innerHTML = messageValue;

    div.appendChild(pName);
    div.appendChild(pSurname);
    div.appendChild(pSubject);
    div.appendChild(pMessage);

    document.body.appendChild(div);
}*/