document.getElementById('form').onsubmit = (event)=>{
    event.preventDefault();
    console.log('verif');
    let nom = document.getElementById('name').value ;
    console.log(nom);
    let prenom = document.getElementById('firtstname').value ;
    console.log(prenom);
    let email = document.getElementById('email').value ;
    console.log(email);
    let utilisateur = [];
    utilisateur.push(nom);
    utilisateur.push(prenom);
    utilisateur.push(email);
    console.log(utilisateur);
}