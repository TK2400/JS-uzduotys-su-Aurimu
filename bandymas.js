// deklaruoti biudzeta

//deklaruoti kaina/

//jeigu turi pakankamai, pasakayti, kad ok, galiu pirkti
// hello git hub

const myBudget = prompt("koks biudzetas")
const prekesKaina = 103

if (myBudget > prekesKaina) {
    alert("valio, galiu pirkti")
} else if (myBudget == prekesKaina) {
    alert("kaip tycia uztenka lygiai")
} else {
    alert("reikia dar pataupyti")
}

console.log("programa baigta")



// const vardas = prompt("labas, koks tavo vardas") // browseris klausia ir ledizai irasyti
// console.log(typeof vardas)
// prompt visada grazina string 





// const car = "Audi"


// if(car === "BMW"||car === "Mini"||car === "Rolls-Royce"){
//   alert("priklauso BMW grupei")
// } else if (car === "VW"||car === "Audi" || car === "Bentley" ||car === "Bugatti" ||car === "Lamborghini" || car ==="Porsche" ){
//   alert("priklauso VW grupei")
// } else {
//     alert ("yra no name brandas")
// }

// const legalAge = 20
// const clientAge =21
// if (legalAge < clientAge) {
//     alert("klientas per jaunas")
// } else alert("prasome pasirinkti preke")

// const manoVardas = "12345678910"
// if (manoVardas.length < 6 ) {
//     alert ("trumpas vardas")
// } else if (manoVardas.length >= 6 && manoVardas.length <= 10) {
//     alert ("ilgas vardas")
// } else if (manoVardas.length > 10) {
//     alert ("labai ilgas vardas")
// }

// const myAge = 47
// if (myAge >= 100 || myAge <= 0) {
//     alert ("invalid age")
// } else if (myAge >= 0.1 && myAge < 18) {
//     alert ("child")
// } else if (myAge >= 18 && myAge <= 99) {
//     alert("Adult")
// }