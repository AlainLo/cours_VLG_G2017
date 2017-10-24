//alert("Hello");//

/*--------
OPERATEURS ARITHMETIQUES
--------*/

// -- 1. Addition
// -- INFO -- je peux déclarer plusieurs variables à la suite
var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;

// -- Addition de nb1 + nb2 avec l'opérateur '+'
resultat = nb1 + nb2;
// -- Affichage dans la console
console.log(resultat);

// -- 2. Soustraction
// -- Soustraction de nb1 - nb2 avec l'opérateur "-"
resultat = nb1 - nb2;
console.log(resultat);

// -- 3. Multiplication
// -- Multiplication de nb1 * nb2 avec l'opérateur "*"
resultat = nb1 * nb2;
console.log(resultat);

// -- 4. Division
// -- Division avec l'opérateur "/"
resultat = nb1 / nb2;
console.log(resultat);

// -- 5. Modulo
// -- le Modulo retourne le reste d'une Division
// -- modulo de nb1 % nb2 avec l'opérateur "%"
resultat = nb1 % nb2;
console.log("le reste de la division de " + nb1 + " par " + nb2 + " est égal à : " + resultat);

// --et maintenant je ré-affect une valeur à nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log("Le reste de la division de " + nb1 + " par " + nb2 + " est égal à : " + resultat);

/*
LES ECRITURES SIMPLIFIEES
*/
nb1 = 15;
nb1 = nb1 + 5; // réaffectation de la valeur en ajoutant 5
console.log(nb1);
//la notation simplifiée de la même opération sera :

nb1 += 10;
console.log(nb1);

// on peut décliner la même opération avec les autres opérateurs +, -, /, *, %
