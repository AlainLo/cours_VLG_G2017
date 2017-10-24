var choix = parseInt(prompt("choisis un nombre :"));
if ((choix >= 2) && (choix <= 9)){
    for(var i = 1; i <= 10 ; i++){
        var res = choix * i;
        document.write(choix + " x " + i + " = "  + res + "<br />");
    }
} else {
    document.write ("<h4>le chiffre doit être compris entre 2 et 9 !</h4>");
}
