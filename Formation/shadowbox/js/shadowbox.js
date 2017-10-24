$(function() {// window.onload = function () {};
/******DECLARATION DES VARIABLES *********/
var slider = $("#slider-wrapper");
var slideContainer = $("#slide-container");
var slides = $(".slide");
var isMoving = false;

/********DECLARATION DES FONCTIONS********/
var move = function (direction){
	if (direction == "next"){
		// on vérifie que le container n'est pas positionnné sur le dernier élément
		if (slideContainer.position().left > -(slides.length -1) * 600 && !isMoving){
			isMoving = true;
			slideContainer.animate({"left" : "-=600"}, function() {
				isMoving = false;
		});
	}
} else {
		if(slideContainer.position().left < 0  &&! isMoving) {
			isMoving = true;
			slideContainer.animate({"left" : "+=600"}, function() {
				isMoving = false;
			});
		}
	}
};

/****************** DECLARATION DES ECOUTEURS D'EVENEMENTS**************/
	$(".open-slider").on("click", function(e){
		e.preventDefault();
		
		var slideNumber = $(this).data("slide"); // index du slide à afficher
		// var slideNumber = $(this).attr("data-slide");
		
		var containerLeft = slideNumber * 600; // calcule la position du slide cible
		
		slideContainer.css({"left": -containerLeft}); // déplace le slider à la position du slider cible
		
		$("#shadow").fadeIn();	
		
		
	});
	
	$("#shadow").on("click", function(e){
		var target = $(e.target); // récupère la cible de l'évènement
		
		if(target.is("#shadow")){// vérifie si la cible de l'évènement correspond au sélecteur #shadow
		$(this).fadeOut();
		}
	});
	
	$(".btn-prev, .btn-next").on("click", function(e){
		e.preventDefault();
		
		var direction = $(this).data("direction");
		
		move(direction);
	});
	
	/******** EXECUTION********/
	var containerWidth = slides.length * 600;
	slideContainer.css({"width": containerWidth});
});