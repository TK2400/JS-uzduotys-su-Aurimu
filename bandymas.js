/* 1-a uzduotis deklaruojam 2 kintamuosius
 - norimas ciklu skaicius
  - ciklu skaicius

  sukurti "while" cikla
   - kiekvienas ciklas turi alertinti kelintas jis yra"

   -*/

// const norimasCikluSkaicius = 3
// let cikluSkaicius = 1

// while (cikluSkaicius < norimasCikluSkaicius) {
//     alert("ciklo numeris: " + cikluSkaicius)
//     cikluSkaicius++ //padidinam vienetu
// }

/* 2 uzduotis dekalruoti skaiciu - number
sukurti cikla, kuris:
 - papraso vartotojo atspeti skaiciu
  - kartoti cikla tol, kol atspes
  pries tai dekalruoti skaiciu
  */

// const verte = 10
// let atsakymas = Number(prompt("atspek skaiciu: "))

// while (atsakymas != verte) {
//     alert("spekite is naujo")

// }

// alert("jus genijus")

const skaicius = 10
let spejimas = prompt("atspek skaiciu: ")

while (spejimas != skaicius) {
    if (spejimas > 0 && spejimas < 10) {
        alert("salia...")
    } else if (spejimas > 10 && spejimas < 20) {
        alert("salia...")
    } else {
        alert("meginkite dar kart.... ")
    }
    spejimas = prompt("atspek skaiciu: ")
}




alert("jus genijus")

/// arba galima padaryti taip

// const skaicius = 10
// let spejimas = 0

// do {
//     spejimas = prompt("atspek skaiciu: ")
// } while (spejimas != skaicius);

// alert("jus genijus")

/* alertinti ar pe rzemas, ar per aukstai*/