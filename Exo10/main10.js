let find = 0;
let zero = 0;
//let randomNbr = Math.floor(Math.random() * 100);
//console.log("Nombre random (entre 1 & 100):",randomNbr);
let maxVal = prompt("Indiquer le chiffre à rechercher");
//Ligne facultative permettant de ne pas oublier la valeur;
console.log("Le chiffre à rechercher est :", maxVal);

let valeur = prompt("Saisir une valeur");
for (let i = 0 ; i<10 ; i++) {
    if (valeur>maxVal) {
        valeur = prompt("Le nombre recherché est plus petit");
    } else if (valeur == maxVal) {
        zero = i;
        i = 10 ;
        find = 1;
    } else if (valeur<maxVal) {
        valeur = prompt("Le nombre recherché est plus grand");
    }
}
if (find == 1) {
    console.log("Ton entraînment acharné a payé. Il t'a fallu ", zero, "essais.");
} else if (find == 0) {
    console.log("Tu es un mauvais mentaliste et tu devrais changer de métier... ")
}