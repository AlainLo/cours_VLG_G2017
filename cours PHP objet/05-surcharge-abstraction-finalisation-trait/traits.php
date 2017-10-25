<?php
//traits.php

trait TPanier
{
	public $nbProduit = 1;
	public function affichageProduits()
	{
		return 'Affichage des produits.';
	}
}

trait TMembre
{
	public function affichageMembre()
	{
		return 'Affichage des memebres';
	}
}

class Site
{
	use TPanier, TMembre;
}

$site = new Site;
echo $site->affichageMembre();

?>