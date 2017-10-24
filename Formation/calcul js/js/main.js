/*
//commentaire de ligne (possible seulement en js)
/* commentaire (possible en js et css)
de 
bloc 
*/
/*on attend que le document soit entièrement chargé
window.onload = function () {
	var myForm = document.getElementById("my-form");
	
	
	// même chose mais plus récent (et donc moins compatible)
	// on récupère les champs #number-1 et #number-2
	var number1 = document.getElementById("number-1");//document est le DOM 
	var number2 = document.getElementById("number-2");
	var resultField = document.getElementById("result-field");
	
	// on déclare la fonction calculate()
	function calculate () {
		// on récupère la propriété value (le contenu) des champs
		var value1 = parseInt(number1.value, 10); //parseInt pour interprèter le champ comme un nombre
		var value2 = parseInt(number2.value, 10);
		// on additionne les deux valeurs
		var result = value1 + value2;
	
		resultField.value = result;
	
		console.log(result);
	}
	
	//var calculate = function() {};
	
	/*ajout d'un écouteur sur l'évènement "submit" du formulaire
	myForm.onsubmit = function () {}; 
	myForm.addEventListener("submit", function(e){ //ici e = event mais event est un mot réservé, donc...
		// alert ("envoi du formulaire");
		e.preventDefault();
		// bloque l'envoi du formulaire vers le serveur	
		
		// on exécute la fonction calculate
		calculate();
	});
};
*/


window.onload = function (){
		var myForm = document.getElementsById("my-form");
		var number1 = document.getElementsById("number-1");
		var number2 = document.getElementsById("number-2");
		var resultField = document.getElementsById("result-field");
		
		function calculate(valeur, valeur2){
			return valeur1 + valeur2;
		
	myForm.addEventListener("submit", function(e){
		e.preventDefault();
		
		var value1 = parseFloat(number1.value, 10); 
		var value2 = parseFloat(number2.value, 10);
		
	
		if (!Number.isNan(value1)		
			&& Number.isNan(value2))
		{
			calculate(value1, value2);
		} else {
			alert("erreur");
		}
	 });
};	

