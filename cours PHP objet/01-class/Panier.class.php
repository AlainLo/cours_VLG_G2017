<?php
// Panier.class.php
class Panier
{
	public $nbProduits; // une propriété

	public function ajouterArticle() // une méthode
	{
		return 'L\'article a été ajouté';
	}

	public function retirerArticle()
	{
		return 'L\'article a été retiré';
	}

	public function affichageArticle()
	{
		return 'Voici les articles';
	}
}

$panier1 = new Panier; // J'instancie un objet $panier1 depuis la classe Panier.
$panier1->nbProduits = 5; // J'attribue 5 à la propriété nbProduits de l'objet panier1.
var_dump($panier1);

echo $panier1->affichageArticle(); // J'appelle la méthode affichageArticle() depuis l'objet $panier1.

$panier2 = new Panier;
$panier2->nbProduits = 7;
var_dump($panier2);