let tab = [];
let positif = 0;
let negatif = 0;
let zero = 0;
let maxVal = prompt("Indiquer le nombre de valeurs");
/*
let limit = 0;
while(limit<maxVal){
    const val = {
        "valeur": prompt("Saisir la valeur")
    }
    tab.push(val);
    limit++
}

// avec un for
for (let i = 0 ; i<maxVal ; i++) {
    valeur = prompt("Saisir une valeur");
    tab.push(valeur);
    if (valeur>0) {
        positif++;
    } else if (valeur == 0) {
        zero++;
    } else {
        negatif++;
    }
}
*/

// avec un while
let statut = true;
while(statut) {
    let nombre = parseInt(prompt("Saisir un nombre"));
    tab.push(nombre);
    if(nombre > 0) {
        positif++;
    } else if (nombre == 0) {
        zero++;
    } else {
    negatif++ ;
}
//demander d'arréter la boucle de tourner
    let arret = prompt("Saisir stop pour arréter");
//condition d'arret de la boucle
    if(arret == "stop"){
        statut = false;
    }
}

console.log(`Il y a ${positif} valeurs positives`);
console.log(`Il y a ${zero} zéros`);
console.log(`Il y a ${negatif} valeurs négatives`);

/*
for (let i = 0 ; i<tab.length ; i++) {
    if (tab[i]>0) {
        let som = 0;
        som += 1 ;
        console.log("Le nombre de valeurs positives est "[som]);
    } else {
        let som2 = 0;
        som2 += 1 ;
        console.log("Le nombre de valeurs positives est "[som2]); 
    }
}
*/

//let nombreValeurs = parseInt(prompt("Entrer le nombre de valeurs"));