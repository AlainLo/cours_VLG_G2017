<?php
//05-surcharge-abstraction-finalisation-trait/surcharge.php

class A
{
	// Déclaration de calcul() dans la classe mère
	public function calcul()
	{
		return 10;
	}
}

class B extends A
{
	//Re-déclaration de calcul() dans la classe fille.
	public function calcul()
	{
		// parent : permet d'accèder à la classe parente (en l'occurrence la classe A) puis d'accèder à une méthode. En l'occurrence calcul.
		// Je stocke en suite le résultat pour le réutiliser.
		$resultat = parent::calcul();
		return $resultat + 5;
	}
}

?>