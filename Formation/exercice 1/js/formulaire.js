window.onload = function (){
	// tout le JS ici
	
	//on récupère l'élèment input
	var myField = document.getElementById("field");
	
	//on récupère le formulaire
	var myForm = document.getElementById("my-form");
	
	//on ajoute l'écouteur d'évènements sur l'envoi du formulaire
	myForm.addEventListener("submit", function (e){
		// on bloque le comportement par défaut de l'évènement
		e.preventDefault();
		
		//on teste la valeur du champ myField
		if (myField.value == "bonjour") {
		// si la valeur est "bonjour"
		alert("Bienvenue"); 
		} else if (parseFloat(myField.value) == myField.value) {
		// si la valeur est un nombre
		alert("chiffre")
	} else {
		// cas par défaut
		alert("erreur");
	}
	});
};