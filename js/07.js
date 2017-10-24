//alert("Salut");//

/* --
 L'opérateur ET : && ou AND
*/
// si je veux cumuler deux conditions
//=> prenom === prenomLogin
// et => MonAge === ageLogin
// pour que les deux propositions correspondent pour êtres validées, il faut
// les associer :
if ( (prenomlogin === prenom) && (agelogin === monAge)) {
    /* ... code ... */
    /* je ne rentre ici que si les 2 conditions sont vraies */

}
if ((A) && (B))(...)
=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI
/*
L'opérateur OU : || ou OR (| pipe => alt gr + 6)
*/
if ( (X) || (Y) ) {...}
=> si X est FAUX et Y est VRAI => VRAI
=> si X est VRAI et Y est FAUX => VRAI
=> si X est FAUX et Y est FAUX => FAUX
=> si X est VRAI et Y est VRAI => VRAI

/*
L'opérateur "!" signifie : "le contraire de"
*/

var utilisateurLog = true;
if(!utilisateurLog){
    // si l'utilisateur n'est pas loggé
}
// ce qui revient à écrire :
if (utilisateurLog == false){
    // si l'utilisateur n'est pas loggé
}
