let nombre = prompt("Saisir le nombre de notes");
let somme = 0 ;
let notes = []; 
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("saisir une note "));
   notes.push(note);
   somme += note ;
}

//calculer la moyenne des notes et l'afficher dans la console
console.log(somme/nombre) ;

//version avec le tableau
let nombre2 = prompt("Saisir le nombre de notes");
let somme2 = 0;
let notes2 = [];
//boucle pour ajouter des notes au tableau
for (let i = 0; i<somme2; i++) {
    notes2.push(parseInt(prompt("Saisir la note")));
}
//boucle pour ajouter les valeurs à somme
for(let j = 0; j<notes2.length; j++){
    somme2 += notes2[j];
}
console.log(somme2/nombre2);