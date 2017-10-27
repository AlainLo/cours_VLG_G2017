<?php

require_once('init.inc.php');

// Réaliser le code PHP permettant d'afficher l'ensemble des employés dans un tableau HTML(stocker le résultat dans un tableau ARRAY).

$tab = array();
//extract($_POST);
$tab['resultat'] = '';
$resultat = $pdo->query("SELECT * FROM employes");
$employes = $resultat -> fetchAll(PDO::FETCH_ASSOC);

$tab['resultat'] .= '<table border="1">';
$tab['resultat'] .= '<tr>';

for($i = 0; $i < $resultat -> columnCount(); $i++ ){
   $colonne = $resultat -> getColumnMeta($i);
   $tab['resultat'] .= '<th>' . $colonne['name'] . '</th>';
}

$tab['resultat'] .= '</tr>';

foreach ($employes as $valeur) {
   $tab['resultat'] .= '<tr>';
       foreach ($valeur as $valeur2) {
           $tab['resultat'] .= '<td>' . $valeur2 . '</td>';
       }
   $tab['resultat'] .= '</tr>';
}

$tab['resultat'] .= '</table>';


 //print_r($tab);

echo json_encode($tab);














//extract($_POST);
//$tab['resultat'] = '';
//if(!isset($mode)) $mode = '';
//if($mode == 'envoi')
//{
//	$result = $mysqli->query("INSERT INTO employes (prenom) VALUES ('$personne')");
//	$tab['resultat'] = 'Employe ajoute!';
//}
//else //elseif($mode == 'affichage')
//{
//	$result = $mysqli->query("SELECT * FROM employes");
//
//		$tab['resultat'] .= "<table border=\"5\"> <tr>"; 
//		while ($colonne = $result->fetch_field()) 
//		{		   
//			$tab['resultat'] .= '<th>' . $colonne->name . '</th>'; 
//		}
//		$tab['resultat'] .= "</tr>"; 
//
//		while ($ligne = $result->fetch_assoc())
//		{
//			$tab['resultat'] .= '<tr>';
//			foreach ($ligne as $indice => $information)
//			{
//				$tab['resultat'] .= '<td>' . $information . '</td>';
//			}
//			$tab['resultat'] .= '</tr>';
//		}
//	$tab['resultat'] .= '</table>';
//}
 // print_r($tab);

//echo json_encode($tab);