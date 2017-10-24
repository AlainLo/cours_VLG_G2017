
window.onload = function () {
	var myForm = document.getElementById("my-form");
	var LeftField = document.getElementById("left"); 
	var TopField = document.getElementById("top"); 
	var carre = document.getElementById("carre");
	var timer;
	
	var move = function (e) {
		e.preventDefault();
		clearInterval(timer); // on supprime l'intervalle s'il existe déjà
		
		var leftValue = parseFloat(LeftField.value);
		var topValue = parseFloat(TopField.value);
		
		if (!Number.isNaN(leftValue) && !Number.isNaN(topValue)) {
			
			//on définit une fonction qui s'exécutera à intervalles réguliers de 
			//500 millisecondes
			timer = setInterval (function() {
				var carrePosY = carre.offsetTop; // position verticale actuelle du bloc
				var carrePosX = carre.offsetLeft; // position horizontale actuelle du bloc
				
				if (topValue > carrePosY){ // si la destination est supérieure à l'origine
					carre.style.top = carrePosY + 1 + "px";
					} else if (topValue < carrePosY){ 
					carre.style.top = carrePosY - 1 + "px";
				}
				
				if (topValue > carrePosY){ // si la destination est supérieure à l'origine
					carre.style.left = carrePosX + 1 + "px";
					} else if (topValue < carrePosX){ 
					carre.style.left = carrePosX - 1 + "px";
					}
			}, 50);
			
			//carre.style.top = topValue+"px";
			//carre.style.left = leftValue+"px";
		}
	}		
		
	myForm.addEventListener("submit", move);
    
}