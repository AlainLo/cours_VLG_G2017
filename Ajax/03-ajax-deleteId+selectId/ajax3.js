// ===============================================================================================================================================================
// Fonction permettant d'ajouter un �v�nement click sur le bouton submit lorsque la page html est charg�e (DOMContentLoaded).
document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById("submit").addEventListener('click', function(event){
		event.preventDefault(); // annule le comportement par d�faut du submit (qui recharge habituellement la page).
		ajax(); // ex�cute notre fonction pour le traitement du submit.
	});
// ===============================================================================================================================================================
// Fonction permettant d'afficher les informations d'un employe (selectionn� via select/option) de la table "employes" en BDD.
	function ajax()
	{
		if (window.XMLHttpRequest) r = new XMLHttpRequest();   //For Most Browser
		else r = new ActiveXObject("Microsoft.XMLHTTP");  //for Explorer
		
		var p = document.getElementById("personne");
		var id = p.options[p.selectedIndex].value;	// console.log(personne);
		var parameters = "id="+id;
		r.open("POST", "ajax3.php", true); 		 //Opening the connection and sending the request.
		r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //r.setRequestHeader("Content-length", parameters.length); //r.setRequestHeader("Connection", "close");
		r.onreadystatechange=function()		//When the state change
		{ 
		   // ReadyState 4 = Loaded     see: http://www.w3.org/TR/2006/WD-XMLHttpRequest-20060405/
		   // status 200 = ok           see: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
		   if(r.readyState==4 && r.status==200)
		   {
			  var obj = JSON.parse(r.responseText);
			  document.getElementById("employes").innerHTML = obj.resultat;
			}
		}
		r.send(parameters);
	}

});