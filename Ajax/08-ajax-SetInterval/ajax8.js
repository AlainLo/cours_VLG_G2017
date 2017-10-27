
// ===============================================================================================================================================================
// Fonction permettant d'ex�cuter la m�thode ajax() toutes les 10 secondes pour afficher les employ�s de mani�re actualis�e.
	setInterval("ajax()", 10000);
	ajax(); // �x�cution de la m�thode ajax() imm�diatement pour ne pas attendre 10 secondes lors du 1er affichage de la page.

function ajax()
{
	r = new XMLHttpRequest();
	//console.log(r);
	//document.write('test<br>');

	r.open("POST", "ajax8.php", true); 		 // On pr�pare le fichier PHP auquel on envoie des donn�es

	r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // on pr�pare la requ�te http

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
// Fonction permettant d'ins�rer un employ� dans la table "employes" en BDD.
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