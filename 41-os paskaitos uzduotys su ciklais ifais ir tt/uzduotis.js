const transliacija = `  32   36   44 16  22      18     8   30   12      86   44
  54   10  64       6         60    84         2       98
40 20     32  44   10        4   172       4   108
     12 120 168    0 10   24        4 196     44   9 188 4
 7 16    18  22    8    11 9   4 15 6 43 22
27 5       32              3 30 42 1       49 20

10     16    22      5  2 86
2 54    6    60 84  0   5    12      2  98 22 40     74 4
`;

function masyvoValytuvas(masyvasKuriReikiaIsvalyt) {
    const tikSkaiciai = [];

    for (let i = 0; i < masyvasKuriReikiaIsvalyt.length; i++) {
        if (masyvasKuriReikiaIsvalyt[i] !== '') {
            tikSkaiciai.push(masyvasKuriReikiaIsvalyt[i]);
        }
    }

    return tikSkaiciai;
}

// Pirma uzduotis
const transliacijaBeNewLine = transliacija.replaceAll('\n', ' ');
const masyvasSuTarpais = transliacijaBeNewLine.split(' ');
const skaiciuMasyvas = masyvoValytuvas(masyvasSuTarpais);

// Antra uzduotis
const paskutiniaiSkaiciai = skaiciuMasyvas.slice(-40);

// Trecia uzduotis
const vartotiniSkaiciai = [];

for (let i = 0; i < paskutiniaiSkaiciai.length; i += 2) {
    if (paskutiniaiSkaiciai[i] !== '6') {
        vartotiniSkaiciai.push(paskutiniaiSkaiciai[i]);
    }
}
// console.log(vartotiniSkaiciai)

// Ketvirta uzduotis
const sprendimas = [];


for (let i = 0; i < vartotiniSkaiciai.length; i++) {
    let skaiciuokle = 0

    for (let j = 0; j < vartotiniSkaiciai.length; j++) {
        if (vartotiniSkaiciai[i] === vartotiniSkaiciai[j]) {
            skaiciuokle++
        }
    }

    if (skaiciuokle > 1 && !sprendimas.includes(vartotiniSkaiciai[i])) {
        sprendimas.push(vartotiniSkaiciai[i])
    }
}

console.log(sprendimas)


// 5-a uzduotis

// const data = `${sprendimas[0]} - ${sprendimas[2]} - ${sprendimas[1]}`
// console.log(data)

const date = [ // norint kad nereikėtų keisti masyvo tvarkos dėl 22-5-2 į 22-2-5, reiktų žaisti su 
    // 4-os u-duoties for, padaryti, kad imtų iš apacios
    sprendimas[0],
    sprendimas[2],
    sprendimas[1]
]

alert(date.join('-'))
alert(sprendimas.join('-'))