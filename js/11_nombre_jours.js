var heure = prompt("Indiquez l'heure :");
var minute = prompt("Indiquez les minutes :");
var seconde = prompt("Indiquez les secondes :");

// on teste les cas d'erreur
if  ((heure >= 0) && (heure <= 23) && (minute >=0) && (minute <=59) && (seconde >= 0) && (seconde <=59)){seconde++;
        if  (seconde === 60){//===
            // on met les secondes à 0 et passe à la minute suivante
            seconde = 0;
            minute++;
            if (minute === 60){//===
            // on met les minutes à 0 et passe à l'heure suivante
                minute = 0;
                heure++;
                if (heure === 24){//===
                // on met les heures à 0 et passe au jour suivant
                heure = 0;
                }
            }
        }
        document.write("<h3>Dans une seconde, il sera " + heure + " h " + minute + " m " + seconde + " s</h3>");
} else {
        document.write("<h3>heure incorrecte</h3>");

}
