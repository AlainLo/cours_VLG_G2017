$(function(){ //window.onload = fonction() {};
	var columnWidth = $("#wrapper").width() / 5; // on récupère la largeur en pixels de 20% du conteneur//
	
	var grid = $("#wrapper").masonry({itemSelector :".item", columnWidth : columnWidth, transitionDuration :0});
	
	grid.imagesLoaded().progress(function(){ //fonction de callback qui est appelée à chaque chargement d'une image dans le conteneur//
	grid.masonry("layout"); // recalcule la mise en page de la grille
	});
/**************************** DECLARATION DES VARIABLES *******************************/

/**************************** DECLARATION DES FONCTIONS *******************************/

/**************************** DECLARATION DES ECOUTEURS D'EVENEMENT *******************************/


			
	
/**************************** EXECUTION *******************************/
});