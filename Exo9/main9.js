let quantiteChoco = prompt("Indiquez le nombre de chocolotaines achetées");
let prixTotal = 0;
for (let i = 0; i<quantiteChoco ; i++) {
    if (quantiteChoco<=10) {
        prixTotal = 1.40*quantiteChoco;
    } else if (quantiteChoco>10 && quantiteChoco<=20) {
        prixTotal = 1.40*quantiteChoco + (quantiteChoco-10)*1.30;
    } else if (quantiteChoco>20) {
        prixTotal = 1.40*quantiteChoco + (quantiteChoco-10)*1.20;
    }
}

console.log(`Il y a ${quantiteChoco} chocolatines à acheter pour un total de ${prixTotal.toFixed(2)} €`)
