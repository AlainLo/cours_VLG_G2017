les types de données 

string
var str = "ma chaine de caractères" + "deuxième partie";

number
float (nombre à virgule ex: 3.14159265453)
int (nombre entier ex: 25)

boolean
(true ou false)
choix binaire (vrai ou faux, 0 ou 1)

array
tableau de données multi-dimensionnel
(normalement données de même de nature)
var my Arr = ["pomme", "banane", "figue"]

object
liste de propriétés

var myObject =
{
"nom":"guéchoum",
"prénom": "Anthony",
"age":25
}

alert(myArr[1]); //>renvoie "banane"
myArr.length //> nombre d'éléments dans le tableau

myObject.prenom // > renvoie la valeur de la propriété prénom de l'objet myObject
myObject["prenom"] //idem

opérateur
+ - * / %

2 + 5 // > renvoie 7
2 -	5 // > renvoie -3
2 * 5 // > renvoie 10
2 / 5 // > renvoie 0.4
2 % 5 // > renvoie 2 (le reste entier de la division)


Les fonctions

function myFunction (myArg1, myArg2) {
	//instructions qui vont être exécutées à l'appel de la fonction
}
// appel
myFunction (2, 56);

/*autre possibilité de déclaration de fonction :
var myFunction = function (myArg1, myArg2){};
*/

function returning (){
return "bonjour";
}

var myVar = returning();

function calculate (value, value2) {
	return value1 + value2;
}

result = calculate(1, 7);
result2 = calculate(13, 7);


les conditions

if (conditions) {
	//instructions - les conditions revoient toujours à un boléen true/false
	
if (conditions) {
// instructions
} else {
	// instructions si les conditions ne sont pas respectées
	
if (conditions) {
	//instructions 
} else if (conditions2) {
	// instructions si les conditions ne sont pas respectées 
	//ET que les conditions2 sont respectées
	}

opérateurs de comparaison
<>
<= >=
0>21 // renvoie true
0<0 // renvoie false
0>-7// renvoie true
0>21// renvoie false
0>0 // renvoie false
0>0 // renvoie false
0 <= 0 //renvoie true
0 >= 0 //renvoie true

==
1 == 1 // renvoie true
1 == 0 // renvoie false
1 == "1" // renvoie true

=== (égalité stricte)
1 === 1// renvoie true
1 === "1"// renvoie false
1. 0 === 1 // renvoie false

!= (inégalité)
1 != 1// renvoie false
1 !=0 // renvoie true
1 != "1" // renvoie false

!== (inégalité stricte)
1 !== 1 // renvoie false
1 !== "1"// renvoie true
1 != 1.0 //renvoie false

typeof 1 // renvoie "number"
typeof "bonjour" // renvoie "string"
typeof myVar // renvoie "undefined" (la variable myVar est vide ou non définie)
// typeof n'est PAS un opérateur

Les opérateurs logiques

&& // va vérifier 2 conditions exemple :
if (condition && condition2){
	// instructions exécutées si les deux conditiond renvoient true
}
||
if (condition1|| condition2){
	// instructions exécutées si au moins une des deux conditions renvoie true
}

if ((condition1 || conditon2) && (condition3 || condition4)){
// si condition1 et/ou condition2 renvoient true ET condition3 et/ou condition4 renvoient true
}
!
if (!condition{
	// s'éxécute si condition est false
}
if (condition == false){}
if (condition != true){}

if (!(condition1 || condition2)) {
	//si aucune des conditions n'est true
}

l'incrémentation
incrémenter, c'est augmenter la valeur d'une variable.

var i = 0;
i= i + 1; // i= 1
i+= 1; i = 2
i++; i = 3

i += 2; // i = 5
i -= 1; // i = 3
i--; // i = 2

i *= 2; // i = 4
i /= 2; //i = 2

i %= 2; //i = 0

l'incrémentation va être particulièrement utile dans le cas des boucles :
var j = 0;
While (j < 10) { // tant que j est inférieur à 10
	j++; // j'incrémente j de 1
}
ou : 
for (i = 0; i < 10; i++){ // même chose que précédemment mais pas besoin de déclarer la variable
}

la boucle for in est spécifiquement utilisée pour les éléments d'un tableau

var myArr = ["chat", "chien", "loutre", "poney"];
for (item in myArr) { // pour chaque entrée dans le tableau
	alert(item);
}

var myObject = {"nom" : "Guéchoum", "prenom" : "Anthony"}
for (property in myObject) { // pour chque propriété de l'objet
	alert(property); // affiche le nom de la propriété
	alert(myObject [property]); //affiche la valeur de la propriété
}


for (i = 0;  i< my Arr.length; i++){// pour chaque entrée dans le tableau myArr
	alert(myArr[i]);
	
switch // va toujours vérifier une égalité : vous devez connaître les valeurs possibles de votre/vos variable(s)

var word = "pomme";
switch (word) {// on teste la valeur de word
	case "banane"; // if (word == "banane")
	break; // indique la fin de 

	case "pomme" : // else if (word =="pomme")
	
	break;
	default: // cas par défaut (équivalent de else)
	break;
}


//Portée (scope) des variables et des fonctions

//scope : window

var myVar; //variable globale (on peut l'appeler de n'importe où dans la page

function myFunc (arg) { // fonction globale (arg est local à la fonction)
	var var2; // variable locale : utilisable seulement dans la fonction  et par les fonctions dans la fonction
	
	var3;// variante globale
}

/////////////////////////////////////////////////////////////////////////////

 var myString = "test";
 function myFunc (myString) {
	 alert(myString); // ici la variable et la fonction, portant le même nom, 
	 //vont entrer en conflit puisque la variable a une portée globale
	myFunc ("pomme"); // alert "pomme"
	
function func2 () {
	var myString = "retest"
	alert(window.myString); // correspond à la variable globale ("test")
	alert(myString); // correspond à la variable locale ("retest")
