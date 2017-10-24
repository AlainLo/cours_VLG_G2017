<?php
// 02-getter-setter/Etudiant.class.php
class Etudiant
{
	private $prenom;
	public function __construct($arg)
	{
		echo 'Instanciation, nous avons reçu l\'argument suivant : ' . $arg;
		$this->setPrenom($arg);
	}

	public function setPrenom($arg)
	{
		if(strlen($arg) < 30){
				$this->prenom = $arg;
		}
	}
	public function getPrenom()
	{
		return $this->prenom;
	}
}


$etudiant = new Etudiant('Marc');

var_dump($etudiant);
$etudiant->setPrenom('Nicolas');
var_dump($etudiant);
