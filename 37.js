/*const masyvas = [

]

masyvas.push(`Tomas`)
console.log(masyvas)

masyvas.unshift("Egidijus") // i pradzia idedama Egidijus
console.log(masyvas)

// masyvas[1] = "Romas"
masyvas.pop("Romas")
console.log(masyvas)

masyvas.splice(masyvas.length) // gausime masyvo ilgi
*/
const saliuSarasas = [
    'estija',
    'latvija',
    'lietuva',
    'svedija',
    'suomija'
];

const sarasoIlgis = saliuSarasas.length
console.log(sarasoIlgis);

for (let i = 0; i < sarasoIlgis; i++) {
    const ul = document.querySelector('ul') //randa ul elementa
    const li = document.createElement('li') // sukuria li
    li.innerText = saliuSarasas[i] // iraso verte
    ul.append(li) //prisega viena prie kito
};