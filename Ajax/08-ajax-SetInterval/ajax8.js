
// ===============================================================================================================================================================
// Fonction permettant d'exécuter la méthode ajax() toutes les 10 secondes pour afficher les employés de manière actualisée.
	setInterval("ajax()", 10000);
	ajax(); // éxécution de la méthode ajax() immédiatement pour ne pas attendre 10 secondes lors du 1er affichage de la page.

function ajax()
{
	r = new XMLHttpRequest();
	//console.log(r);
	//document.write('test<br>');

	r.open("POST", "ajax8.php", true); 		 // On prépare le fichier PHP auquel on envoie des données

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