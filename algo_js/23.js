/*
1- VARIABLES qui stockent un élément du DOM (Document Object Model)
*/
// cible le bouton afficher/cacher dans le DOM
var bouton = document.getElementById('toggle-rectangle');

//cible le rectangle dans le DOM
var rectangle = document.querySelector('.rectangle');

/*
2 - FONCTIONS
*/

/*
a- fonction au clic sur le bouton 
*/
// la méthode ou fonction .toggle() va ajouter ou supprimer la class (comme un interrupteur)
function surClickBouton(){
	rectangle.classList.toggle('hide');//correspond à .hide en css qui a la proprièté display: none;
}
function survolrectangle(){
	rectangle.classList.add('important');//correspond à .hide en css qui a la proprièté display: none;
}
function sortrectangle(){
	rectangle.classList.remove('important');
	rectangle.classList.remove('good');//correspond à .hide en css qui a la proprièté display: none;
}
function clicrectangle(){
	rectangle.classList.toggle('good');//correspond à .hide en css qui a la proprièté display: none;
}
/*
3 - ECOUTEUR D'EVENEMENT
*/
/*l'écouteur prend 2 paramètresécouteur(paramètre_1, paramètre_2)
en 1er => l'évènement
en 2nd => la fonction à éxécuter à cet évènement
*/
/*
a-installe un gestionnaire d'évènements au clic sur le bouton ciblé
dans ma variable BUTTON*/
bouton.addEventListener('click', surClickBouton);
/*
b-installe un gestionnaire d'évènements au survol sur le rectangle
*/
rectangle.addEventListener('mouseover', survolrectangle);
/*
c-installe un gestionnaire d'évenements à la sortie du survol du rectangle
*/
rectangle.addEventListener('mouseout', sortrectangle);
/*
d-installe un gestionnaire d'évènements au double clic du rectangle
*/
rectangle.addEventListener('dblclick', clicrectangle);
/*
*/