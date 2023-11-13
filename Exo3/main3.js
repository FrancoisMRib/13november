let nombre1 = parseInt(prompt("Saisir le 1 nombre"));
let nombre2 = parseInt(prompt("Saisir le 2 nombre"));

//afficher dans la console si le produit est négatif
switch(true){
    case nombre1*nombre2<0:
    console.log("Le produit est négatif");
    break;
    default:
    break;
}