/*
let premierMot = prompt("Saisir le premier mot");
let secondMot = prompt("Saisir le deuxième mot");
let troisiemeMot = prompt("Saisir le troisième mot");

if (premierMot<=secondMot && secondMot<=troisiemeMot) {
    console.log("Les mots sont dans l'ordre alphabétique");
} else {
    console.log("Les mots ne sont pas dans l'ordre alphabétique"); 
}
*/

/*
function strSort(a) {
    return a.sort(function(x,y) {
      return x.toString().localeCompare(y.toString());
    });
  }

let tab = [premierMot, secondMot, troisiemeMot];
let primaire = console.log(tab);
let afficherdsConsole = strSort(tab);
console.log(strSort(tab));
switch(true) {
    case (primaire == afficherdsConsole) :
        console.log("Les mots sont dans l'ordre alphabétique");
        break;
    default :
        console.log("Les mots ne sont pas dans l'ordre alphabétique");
        break;
}
*/

//Version avec le spread operator
let tableau = [prompt("Saisir le premier mot"), prompt("Saisir le deuxième mot"), prompt("Saisir le troisième mot")];
let tableauTrie = [...tableau];
//Ou alors en remplaçant la ligne précédente par let tableauTrie = Object.values(tableau);
tableauTrie.sort();

console.log(tableau, tableauTrie);

if (tableau == tableauTrie) {
    console.log("Les mots sont dans l'ordre alphabétique");
} else {
    console.log("Les mots ne sont pas dans l'ordre alphabétique");
}
/*
for(i=0; i<tableauTrie.length; i++){
    if(tableauTrie[i]!=tableau[i]){
        console.log("Les mots ne sont pas dans l'ordre alphabétique");
        break;
    } else {
        console.log("Les mots sont dans l'ordre alphabétique"); 
    }
}
*/

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
