var nb1 = parseInt(prompt("Indiquez un premier nombre"));
var nb2 = parseInt(prompt("Indiquez un deuxième nombre"));
if ((!isNaN(nb1)) && (!isNaN(nb2))) {
    if (nb1 > nb2){
    document.write("votre premier nombre " + nb1 + " est supérieur à votre second " + nb2 );
}
    else if (nb1 < nb2) {
    document.write("votre premier nombre " + nb1 + " est inférieur à votre second " + nb2 );
}
    else {
    document.write("votre premier nombre " + nb1 + " est égal à votre second " + nb2 );
}
} else {
    alert("Vous n'avez pas saisi de chiffre(s)");
}
