//fonction permettant d'ajouter un évènement 'click' sur le bouton submit lorsque la page html est chargée (DOMContentLoaded)
document. addEventListener("DOMContentLoaded", function(event){
	document.getElementById("submit").addEventListener('click', function(event)
		{
			event.preventDefault();
			ajax();	
		});
	function ajax()
	{
		r = new XMLHttpRequest ();

		var p = document.getElementById('personne');
		var personne = p.options[p.sectedIndex].value;
		console.log(personne); // on récupère la valeur du sélecteur

		var parameters = "personne="+personne;
		console.log(parameters);

		r.open("POST", "ajax9.php", true);

		r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	}
});
// ===============================================================================================================================================================
// Fonction permettant d'exécuter la méthode ajax() toutes les 10 secondes pour afficher les employés de manière actualisée.
	setInterval("ajax()", 10000);
	ajax(); // éxécution de la méthode ajax() immédiatement pour ne pas attendre 10 secondes lors du 1er affichage de la page.

function ajax()
{
	r = new XMLHttpRequest();
	console.log(r);
	//document.write('test<br>');

	var personne = ['prenom']('employes')

	r.open("POST", "ajax9.php", true); 		 // On prépare le fichier PHP auquel on envoie des données

	r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // on prépare la requête http

	r.send(); // on donne le feu vert

	r.onreadystatechange=function()		
	{ 
			if(r.readyState == 4 && r.status == 200)
		   {
			  var obj = JSON.parse(r.responseText);
			  document.getElementById("resultat").innerHTML = obj.resultat;
			}
	}
		
}






















// ===============================================================================================================================================================
// Fonction permettant d'insérer un employé dans la table "employes" en BDD.
//	function ajaxEnvoiForm()
//	{	// console.log('on passe dans ajax()');
//		if (window.XMLHttpRequest) r = new XMLHttpRequest();   //For Most Browser
//		else r = new ActiveXObject("Microsoft.XMLHTTP");  //for Explorer
//		
//		var p = document.getElementById("personne");
//		var personne = p.value;
//		console.log(personne);
//		var parameters = "personne="+personne+"&mode=envoi";
//		r.open("POST", "ajax8.php", true); 		 //Opening the connection and sending the request.
//		r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //r.setRequestHeader("Content-length", parameters.length); //r.setRequestHeader("Connection", "close");
//		r.onreadystatechange=function()		//When the state change
//		{ 
//		   // ReadyState 4 = Loaded     see: http://www.w3.org/TR/2006/WD-XMLHttpRequest-20060405/
//		   // status 200 = ok           see: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
//		   if(r.readyState==4 && r.status==200)
//		   {
//			  var obj = JSON.parse(r.responseText);
//			  ajax();
//			}
//		}
//		r.send(parameters);
//	}
// ===============================================================================================================================================================