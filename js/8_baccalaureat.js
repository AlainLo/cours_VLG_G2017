var n1 = parseFloat(prompt("Indiquez votre note"));
if (!isNaN(n1) && n1<=20)  {
    if (n1 < 10){
    document.write("votre moyenne est de " + n1 + " Vous êtes recalé");
    }
    else if (n1 >=10){
    document.write("votre moyenne est de " + n1 + " Vous êtes admis");
    }
    else if (n1 > 12){
    document.write("votre moyenne est de " + n1 + " Vous êtes admis" + " avec mention");
    }
}
else {
    document.write("la note inscrite est erronée");
}
