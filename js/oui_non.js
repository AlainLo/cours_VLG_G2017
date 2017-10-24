var disMoi ="";
var i = 0;

while ((disMoi !== "oui") && (disMoi !== "non")) {
    disMoi = prompt("Alors on joue au Ni Oui Ni non ?");
    document.write(disMoi + " pour la " + i + "° fois, dis-moi oui ou non !<br/>");
    i++
}
document.write("<h1 style='background-color:cyan; text-align:center;'>Fini ;-) !</h1>");
