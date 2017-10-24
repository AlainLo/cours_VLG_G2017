window.onload = function () {
	var nav = document.getElementById("main-nav");
	var btn = document.getElementById("toggle-nav");
	
	var toggleNav = function(e){
		e.preventDefault(); // supprime le comportement par défaut de l'évènement
		nav.classList.toggle("opened");
	};
		
	//on ajoute un écouteur d'évènementsur l'évènement click du bouton
	btn.addEventListener("click", toggleNav);
		
	// on supprime l'écouteur d'évènement
	//btn.removeEventListener ("click", toggleNav);
}