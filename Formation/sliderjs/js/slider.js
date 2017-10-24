$(function(){
	var sliders = $(".slider-wrapper");
	
		sliders.each(function (){
		//pour chaque élément contenu dans sliders
			var container = $(this).find(".slide-container"); //contient l'enfant .slide-container du slider
		
			var slides = $(this).find(".slide"); // contient la liste des éléments .slide qui sont dans le slider
		
			var containerWidth = slides.length * 500;
		
			container.animate("width", containerWidth);
			// on ajoute les écouteurs d'évènements pour gérer la navigation
		
		$(this).find("btn-prev").on("click", function(e){
			e.preventDefault();
			//alert('backward');
		if (container.position().left < 0){
			container.animate({"left": "+=500"});
			}
		});
		$(this).find("btn-prev").on("click", function(e){
			e.preventDefault();
			//alert('forward');
		if (container.position().left > -(slides.length - 1) * 500){
			container.animate({"left": "-=500"});
			}
		});
	});
});