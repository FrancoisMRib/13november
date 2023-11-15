//let randomNbr = Math.floor(Math.random() * 6);
//console.log("Nombre random (entre 1 & 100):",randomNbr);

//fonction dé
/*
function dice() {
    return (Math.floor(Math.random() * 6)) + 1;
}
dice() ;
*/
function numberRandom(nbr) {
    return Math.floor((Math.random()* nbr) + 1);
}

//La méthode est la même qu'avec deux compteurs, comme avec le double compteur de chiffres positifs et négatifs
//variable pour stocker les scores :
let scoreBanque = 0;
let scoreJoueur = 0;

//boucle pour gérer les 5 tours
for (let i = 0; i<5 ; i++) {
    const lanceBanque = numberRandom(6);
    const lanceJoueur = numberRandom(6);
}

if(lanceBanque>lanceJoueur) {
    scoreBanque++;
} else if (lanceBanque==lanceJoueur) {
    scoreJoueur += 2;
} else if (lanceJoueur>lanceBanque) {
    scoreJoueur++;
}

if (scoreJoueur>scoreBanque) {
    console.log("phrase");
} else if (scoreBanque>scoreJoueur) {
    console.log("phrase");
} else if (scoreBanque==scoreJoueur) {
    console.log("phrase");
}