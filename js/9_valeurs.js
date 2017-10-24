var nb1 = Number(prompt("Entrez nb1 :"));
var nb2 = Number(prompt("Entrez nb2 :"));
var nb3 = Number(prompt("Entrez nb3 :"));

if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 = nb1 + nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}
console.log(nb1);
document.write('le nombre 1 vaut au final :' + nb1);
console.log(nb2);
document.write('le nombre 2 vaut au final :' + nb2);
console.log(nb3);
document.write('le nombre 3 vaut au final :' + nb3);

// valeur initiales nb1=nb2=nb3=4
// valeur finales nb1=0 nb2=4 nb3=12

// valeur initiales nb1=4 nb2=3 nb3=2
// valeur finales nb1=4 nb2=3 nb3=2

// valeur initiales nb1=2 nb2=4 nb3=0
// valeur finales nb1=3 nb2=4 nb3=0
