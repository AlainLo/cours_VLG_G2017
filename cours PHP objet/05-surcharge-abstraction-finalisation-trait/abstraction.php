<?php
//abstraction.php

// abstract signifie que je vais trouver des méthodes abstraites dans la class
abstract class Joueur
{
	// méthode normale
	public function seConnecter()
	{
		return $this->etreMajeur();
	}
	// une méthode abstraite.
	// "abstract" signifie que lorsqu'on étend la Class Joueur, on sera obligé de redéfinir ces méthodes. En l'occurrence, etreMajeur() et devise().
	abstract public function
	 etreMajeur();
	abstract public function devise();
}


class JoueurFR extends Joueur
{
	public function etreMajeur()
	{
		return 18;
	}
	public function devise()
	{
		return '€';
	}
}

class JoueurUS extends Joueur
{ 
	public function etreMajeur()
	{
	return 21;
	}
	public function devise()
	{
		return '$';
	}
}