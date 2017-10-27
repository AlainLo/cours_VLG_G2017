// ===============================================================================================================================================================
// Fonction permettant d'afficher les informations d'un employe de la table "employes" en BDD.
document.addEventListener("DOMContentLoaded", function(event) { 
    if (window.XMLHttpRequest) r = new XMLHttpRequest();   //For Most Browser
	else r = new ActiveXObject("Microsoft.XMLHTTP");  //for Explorer
	var personne = document.getElementById("personne");
	personne = personne.innerHTML;
	// console.log(personne.innerHTML);
	var parameters = "personne="+personne;
	r.open("POST", "ajax4.php", true); 		 //Opening the connection and sending the request.
	r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //r.setRequestHeader("Content-length", parameters.length); //r.setRequestHeader("Connection", "close");
    r.onreadystatechange=function()		//When the state change
	{ 
       //ReadyState 4 = Loaded     see: http://www.w3.org/TR/2006/WD-XMLHttpRequest-20060405/
       //status 200 = ok           see: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
       if(r.readyState==4 && r.status==200)
		{
		  var obj = JSON.parse(r.responseText);
          document.getElementById("resultat").innerHTML = obj.resultat;
        }
    }
    r.send(parameters);

});