//alert("Sayonara");//

// -- L'opérateur de comparaison == signifie 'égal à'
// il permet de vérifier que les VALEURS de 2 variables sont identiques
var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2); // retourne TRUE

// l'opérateur de comparaison === signifie 'strictement égal à'
// il permet de vérifier la VALEUR et le TYPE
console.log(nb1 === nb2); // retourne FALSE

// -- L'opérateur != signifie 'différent de... en VALEUR'
console.log(nb1 !=nb2); // retourne FALSE

// -- L'opérateur !== signifie 'strictement différent de... en VALEUR et en TYPE'
console.log(nb1 !==nb2); // retourne TRUE


/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.
Je dois saisir mon prénom et mon âge pour être authentifié sur le site (les infos sont en BDD, ici dans mes variables prenom et age).
En cas d'échec une alerte m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille.
-------------------------------- */


var prenom = "Stephane";
var monAge = 18;
var mdp = "Tuyau";

var prenomLogin = prompt("quel est votre prénom ?");


if (prenomLogin === prenom) {
    var ageLogin = parseInt(prompt("Indiquez votre âge"));
    if (ageLogin === monAge) {
        var mdpLogin = prompt("le mot de passe ?")
        if (mdpLogin === mdp){
            alert("Bienvenue " +  prenomLogin);
        } else {
            alert("Mot de Passe Invalide");
        }
    } else {
        alert("Vous n'avez pas l'âge requis");
    }
} else {
    alert("votre login est inconnu");
}
