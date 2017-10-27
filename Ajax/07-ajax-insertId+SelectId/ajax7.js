// ===============================================================================================================================================================
// Fonction permettant d'ajouter un �v�nement click sur le bouton submit lorsque la page html est charg�e (DOMContentLoaded).
document.addEventListener("DOMContentLoaded", function(event) { 	
	document.getElementById("submit").addEventListener('click', function(event){
		event.preventDefault(); // annule le comportement par d�faut du submit (qui recharge habituellement la page).
		ajaxEnvoiForm(); // ex�cute notre fonction pour le traitement du submit.
	});
});
// ===============================================================================================================================================================
// Fonction permettant d'ex�cuter la m�thode ajax() toutes les 5 secondes pour afficher les employ�s de mani�re actualis�.
	setInterval("ajax()", 5000);
	// Code setInterval ex�cute toutes les 1000ms exactement , alors que ...  setTimeout attend 1000ms , ex�cute la fonction (ce qui prend quelques ms ) , puis d�finit un autre d�lai . Donc, la p�riode d'attente est en fait un peu plus de 1000 ms.
// ===============================================================================================================================================================
// Fonction permettant d'afficher les employes de la table "employes" en BDD.
	function ajax()
	{	// console.log('on passe dans ajax()');
		if (window.XMLHttpRequest) r = new XMLHttpRequest();   //For Most Browser
		else r = new ActiveXObject("Microsoft.XMLHTTP");  //for Explorer
		
		//var parameters = "depart="+depart+"&postSalaire="+postSalaire+"&postMois="+postMois+"&charges="+postCharges+"&heures="+postHeures+"&mode=salaire";
		r.open("POST", "ajax7.php", true); 		 //Opening the connection and sending the request.
		r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //r.setRequestHeader("Content-length", parameters.length); //r.setRequestHeader("Connection", "close");
		r.onreadystatechange=function()		//When the state change
		{ 
		   // ReadyState 4 = Loaded     see: http://www.w3.org/TR/2006/WD-XMLHttpRequest-20060405/
		   // status 200 = ok           see: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
		   if(r.readyState==4 && r.status==200)
		   {
			  var obj = JSON.parse(r.responseText);
			  document.getElementById("resultat").innerHTML = obj.resultat;
			}
		}
		r.send();
	}
// ===============================================================================================================================================================
// Fonction permettant d'ins�rer un employ� dans la table "employes" en BDD.
	function ajaxEnvoiForm()
	{	// console.log('on passe dans ajax()');
		if (window.XMLHttpRequest) r = new XMLHttpRequest();   //For Most Browser
		else r = new ActiveXObject("Microsoft.XMLHTTP");  //for Explorer
		
		var p = document.getElementById("personne");
		var personne = p.value;
		console.log(personne);
		var parameters = "personne="+personne+"&mode=envoi";
		r.open("POST", "ajax7.php", true); 		 //Opening the connection and sending the request.
		r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //r.setRequestHeader("Content-length", parameters.length); //r.setRequestHeader("Connection", "close");
		r.onreadystatechange=function()		//When the state change
		{ 
		   // ReadyState 4 = Loaded     see: http://www.w3.org/TR/2006/WD-XMLHttpRequest-20060405/
		   // status 200 = ok           see: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
		   if(r.readyState==4 && r.status==200)
		   {
			  var obj = JSON.parse(r.responseText);
			  ajax();
			}
		}
		r.send(parameters);
	}
// ===============================================================================================================================================================