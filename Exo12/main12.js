const nombre = parseInt(prompt("Saisir un nombre"));
if(!isNaN(nombre)) {
    console.log("Table de "+nombre);
//tester si le nombre est bien un nombre
    for(let i = 0; i < 10 ; i++) {
        console.log(nombre+" x "+(i+1)+ " = "+(nombre*(i+1)));
    }
}
else {
    console.log("Veuillez chosir un nombre entier")
}