//exemple ajouter un tableau associatif dans un tableau indéxé
let users = [];
let limit = 0;
while(limit<5){
    const age = {
        "nom": prompt("saisir le nom"),
        "prenom": prompt("saisir le prénom"),
        "age": parseInt(prompt("saisir l'âge'"))
    }
    users.push(age);
    console.log(age);
    limit++
}
let ageMin = users[0].age ;
let ageSav = 0 ;
for (let i = 0; i<users.length; i++) {
    if (users[i].age<ageMin) {
        ageMin = users[i].age ;
        ageSav = i ;
    }
}

console.log(users[ageSav] .nom, users[ageSav].prenom, ageMin)
console.log("L'utilisateur "+users[ageSav].nom+" "+users[ageSav].prenom+" est la plus jeune personne, car elle a "+ageMin);
//récupérer la note du second utilisateur
//users[i].age