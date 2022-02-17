const form = document.querySelector('form');
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
}