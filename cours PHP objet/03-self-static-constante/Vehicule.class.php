<?php
class Vehicule
{
	public static $marque = 'BMW'; // static signifie que l'attribut appartient à la classe.
	public $couleur; // l'attribut appartient à l'objet...
}

$voiture1 = new Vehicule;
$voiture1->couleur = 'Jaune';
echo $voiture1->couleur . '<br>'; // 'jaune'
echo Vehicule::$marque . '<br>'; // j'accède à l'attribut de class en utilisant :: .


$voiture2 = new Vehicule;
$voiture2->couleur = 'bleu';
echo $voiture2->couleur . '<br>';
echo Vehicule::$marque . '<br>';