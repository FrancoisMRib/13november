let premierMot = prompt("Saisir le premier mot");
let secondMot = prompt("Saisir le deuxième mot");
let troisiemeMot = prompt("Saisir le troisième mot");

function strSort(a) {
    return a.sort(function(x,y) {
      return x.toString().localeCompare(y.toString());
    });
  }

var tab = [premierMot, secondMot, troisiemeMot];
var primaire = console.log(tab);
var afficherdsConsole = strSort(tab);
console.log(strSort(tab));
switch(true) {
    case (primaire == afficherdsConsole) :
        console.log("Les mots sont dans l'ordre alphabétique");
        break;
    default :
        console.log("Les mots ne sont pas dans l'ordre alphabétique");
        break;
}
/*
{
    return a.localeCompare(b);
});

console.log(afficherdsConsole);*/

/*
switch(true) {
    case (premierMot > secondMot > troisiemeMot) :
        console.log("Les mots sont dans l'ordre alphabétique");
        break;
    default :
        console.log("Les mots ne sont pas dans l'ordre alphabétique");
        break;
}
*/
