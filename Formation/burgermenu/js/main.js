window.onload = function () {
	var nav = document.getElementById("main-nav");
	var btn = document.getElementById("toggle-nav");
	
	var toggleNav = function(e) {
		e.preventDefault(); // supprime le comportement par défaut de l'événement
		nav.classList.toggle("opened");
	};
	
	// on ajoute un écouteur d'événement sur l'événement click du bouton
	btn.addEventListener("click", toggleNav);
	
	// on supprime l'écouteur d'événement
	//btn.removeEventListener("click", toggleNav);
}