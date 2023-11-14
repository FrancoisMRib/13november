let nomArticle = parseInt(prompt("Entrer le nom de l'article"));
let prixArticle = parseInt(prompt("Entrer le prix de l'article"));
let quantitArticle = parseInt(prompt("Entrer la quantité de l'article"));

let tab = [nomArticle, prixArticle, quantitArticle];
let prixTTC = prixArticle * 1.20 * quantitArticle

console.log(prixTTC);