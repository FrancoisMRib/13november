let nombre = prompt("Saisir le nombre de notes");
var somme = 0 ;
let notes = []; 
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("saisir une note "));
   notes.push(note);
   somme += note ;
}


console.log(somme/nombre) ;