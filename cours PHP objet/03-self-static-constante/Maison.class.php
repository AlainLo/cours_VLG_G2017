<?php
// 03-self-static-constante/Maison.class.php

class Maison
{
	public static $espaceTerrain = '500m²'; // propriété public et static
	public $couleur = 'blanc'; // propriété normale
	private static $nbPiece = 7; // propriété privée ET static (accès par un getter)
	const HAUTEUR = '10m'; // une constante appartient toujours à la classe.

	public static function getNbPiece() // getter d'une propriété static privée.
	{
		return self::$nbPiece; // self : signifie "cette classe". L'équivalent de $this mais pour la classe.
	}
}

echo 'espace terrain : ' . Maison::$espaceTerrain . '<br>'; // J'accède à une propriété de class non pas avec "->" mais avec "::".
$mon_objet = new Maison;
echo 'couleur : ' . $mon_objet->couleur . '<br>';
echo 'Nombre de pièces : ' . Maison::getNbPiece() . '<br>';
echo 'Hauteur : ' . Maison::HAUTEUR;

/*