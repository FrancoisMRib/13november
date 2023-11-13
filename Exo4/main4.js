let ageEnfant = parseInt(prompt("Saisir l'âge de l'enfant"));

switch(true){
    case (ageEnfant>=12):
        console.log("Cadet")
        break;
    case (ageEnfant>=10 && ageEnfant<=11):
        console.log("Minime");
        break;
    case (ageEnfant>=8 && ageEnfant<=9):
        console.log("Pupille");
        break;
    case (ageEnfant>=6 && ageEnfant<=7):
        console.log("Poussin");
        break;
    case (ageEnfant<6):
        console.log("Hors catégorie ou trop jeune")
        break;
}