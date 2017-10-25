<?php
// 06-methode-magique/societe.php

class Societe
{
	public $adresse;
	public $ville;
	public $cp;

// Méthode magique qui se déclenche lorsqu'on essaie de donner une valeur à une propriété qui n'existe pas. 

public function __set($nom, $valeur)
	{
	echo "La propriété $nom n'existe PAS et la valeur $valeur n'a donc pas été affectée.";
	}

// Méthode magique qui se déclenche lorsqu'on essaie de récupérer une méthode qui n'existe pas.
public function __get($nom)
	{
	echo "la propriété $nom n'existe pas, je ne peux donc pas l'afficher.";
	}

public function __call($nom, $arguments)
	{
	echo "tentative d'exécuter la méthode $nom mais elle n'existe pas. Les arguments étaient  " . implode(', ', $arguments) . '.'
	}
}

$societe = new Societe;
$societe->ville = 'Paris';
$societe->pays = 'France'; // La propriété n'existe pas, on déclenche la méthode magique __set() au mieu de de créer une nouvelle propriété.
echo $societe->pays; // La propriété n'existe pas, on déclenche la méthode magique __set() au lieu d'afficher une propriété qui n'existe pas. 
$societe->dsjfkqlmsqdf(1, 2, 3); //La méthode n'existe pas, déclenche_call().