<?php
/*
Créer une class Vehicule
attribut : $litreEssence.
Méthodes : getter et setter pour $litreEssence.

Créer une class Pompe
attribut : $litreEssence.
Méthodes : getter et setter pour $litreEssence
ainsi qu'une autre méthode donnerEssence($vehicule).
donnerEssence fait le plein de la voiture (ajoute 50 litres à son réservoir) et soustrait autant de litres au réservoir de la pompe à essence.

Instancier un véhicule.
Instancier une pompe à essence.
Setter 0 litres d'essence au véhicule.
Setter 800 litres d'essence à la pompe.

Faire le plein de la voiture avec la pompe à essence
*/
class Vehicule
{
	// un attribut $litreEssence qui représente la quantité de litres d'essence il y a dans le réservoir de la voiture.
  private $litreEssence;

  // getter pour l'attribut litreEssence.
	public function getLitreEssence()
	{
		return $this->litreEssence;
	}
	// setter pour l'attribut litreEssence
	public function setLitreEssence($essence)
	{
		$this->litreEssence = $essence;
	}
}

class Pompe
{
	// un attribut $litreEssence qui représente combien de litre d'essence il y a dans le réservoir de la pompe.
  private $litreEssence;

	public function getLitreEssence()
	{
		return $this->litreEssence;
	}

	public function setLitreEssence($essence)
	{
		$this->litreEssence = $essence;
	}

	// Permet de faire le plein de la voiture
	public function donnerEssence(Vehicule $vehicule) // Vehicule signifie que l'on doit passer un objet instancié de la classe véhicule.
	{
		$vehicule->setLitreEssence(50); // On fait le plein de la voiture en utilisant le setter pour litreEssence de la voiture.
		$resultat = $this->getLitreEssence() - 50;
		$this->setLitreEssence($resultat); // On retire 50 litres d'essence à la pompe.
	}
}

$vehicule = new Vehicule;
$vehicule->setLitreEssence(0);

$pompe = new Pompe;
$pompe->setLitreEssence(800);

$pompe->donnerEssence($vehicule);
var_dump($vehicule);
var_dump($pompe);