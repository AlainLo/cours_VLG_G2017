window.onload = function () {
	//récupère une liste d'éléments par leur nom de balise
	var links = document.getElementsByTagName("a");
	
	links[2].style.color = "darkred"; // change la couleur du troisième élément du tableau links
	
	//récupère une liste d'éléments par leur classe
	var activeLinks = document.getElementsByClassName("active-link");
	
	activeLinks[0].style.color = "";
	
	//il ajoute une classe au premier lien
	links[0].className += " test";
	
	// ajoute une classe au second lien
	links[1].classList.add("test");
	
	// récupère le dernier élément du tableau links
	var lastLink = links[links.length - 1];
	// vérifie que lastLink a la class active-link
	console.log(lastLink.classList.contains("active-Link"));
	//supprime une classe au dernier lien
	links[links.length - 1].classList.remove("active-link");
	
	console.log(lastLink.classList.contains("active-link"));
	
	// on ajoute une classe si elle n'est pas prèsente, on la supprime sinon
	
	links[2].classList.toggle("test"); // supprime la classe
	links[3].classList.toggle("test"); // ajoute la classe
	
	// sélectionne le premier élément qui correspond au sélecteur
	var elem = document.querySelector(".active-link");
	// sélectionne tous les éléments qui correspondent au sélecteur
	var elems = document.querySelectorAll(".active-link");
	
	//crée un nouvel élément a 
	var newLink = document.createElement("a");
	newLink.href = "#";
	newLink.textContent = "Nouveau lien";
	
	// insère l'élément dans le body (à la fin)
	document.body.appendChild(newLink);
	
	var nav = document.getElementById("main-nav");
	// insère l'élément avant l'élément nav
	document.body.insertBefore(newLink, nav);
	
	// récupère l'élément directement après
	console.log(newLink.nextSibling);
}