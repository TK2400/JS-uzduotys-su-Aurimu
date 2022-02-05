const transliacija = `
 32   36   44 16  22      18     8   30   12      86   44
  54   10  64       6         60    84         2       98
40 20     32  44   10        4   172       4   108
     12 120 168    0 10   24        4 196     44   9 188 4
 7 16    18  22    8    11 9   4 15 6 43 22
27 5       32              3 30 42 1       49 20

10     16    22      5  2 86
2 54    6    60 84  0   5    12      2  98 22 40     74 4
`;

const masyvasSuTarpais = transliacija.split(/\s/gm)
    // const masyvasSuTarpais = transliacija.split(' ')
    // console.log(masyvassu Tarpais)




// console.log(masyvasLength)

const svarusMasyvas = []

for (let i = 0; i < masyvasSuTarpais.length; i++) {
    // console.log(masyvasSuTarpais[i])
    const verte = masyvasSuTarpais[i]

    if (verte !== '') {
        console.log(verte)
    } else {
        svarusMasyvas.push(verte)
    }

    // arba 

    /*if (verte !== '') {
        svarusMasyvas.push(verte)
    }*/

}

console.log(svarusMasyvas)