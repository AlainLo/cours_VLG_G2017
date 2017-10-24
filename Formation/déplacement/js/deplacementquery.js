$(function() {
	var leftField = $("#left");
	var topField = $("#top");
	var carre = $("#carre");
	
	$("#my-form").on("submit", function(e){	
		e.preventDefault();
		
		var leftValue = parseInt(leftField.val());
		var topValue = parseInt(topField.val());
		
		// équivalent de !Number.isNaN(leftValue)
		if ($.isNumeric(leftValue) && $.isNumeric(topValue)){
			carre.stop().animate({"left": leftValue, "top": topValue},20000); // équivalent de block.style.left= leftValue; par défaut 0.8s
		}
	});
});