/*
1-VARIABLES :
On sélectionne les éléments du DOM (page html) 
pour les stocker dans des variables afin de les manipuler ensuite dans notre code
*/

var monBouton = document.getElementById('myButton');
var liste = document.getElementById('dropdown-list');

/*
3-FONCTION
*/

function afficher(){
	if (liste.style.display == 'block'){
		liste.style.display = 'none';
		
	} else {
		liste.style.display = 'block';
	}
}

/*
2-EVENEMENT
*/
monBouton.addEventListener('click', afficher);
