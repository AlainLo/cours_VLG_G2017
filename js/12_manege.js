/* 1--boucle WHILE */
var tour = 0;
while (tour <10){
    tour++;
    document.write ("C'est le tour de manège n°" + tour + "<br />");
}
document.write ("<hr />");

/* 1--boucle FOR */
for (var i =1; i <= 10; i++) {
    document.write("c'est le tour de manège n°" + i  + "<br />");
}

document.write ("<hr />");
document.write ("<hr />");

// avec la demande faite par l'utilisateur :

/* 2--boucle WHILE */
var question = parseInt(prompt("Combien de tours ?"));
var compteur = 1;
while (compteur <= question){
    document.write("C'est le tour de manège n°" + compteur + "<br />");
    compteur++;
}
document.write ("<hr />");

/* 2--boucle FOR */
var nbTours = parseInt(prompt("Combien de tours ?"));
for (var tour = 1; tour <= nbTours; tour++) {
    document.write("c'est le tour de manège n°" + tour + "<br />");
}

document.write ("<hr />");
document.write ("<hr />");
