<?php

require_once('init.inc.php');
$tab = array();
extract($_POST);
$tab['resultat'] = '';
$result = $pdo->query("SELECT * FROM employes WHERE prenom='$personne'");

$tab['resultat'] .= "<table border="5\"><tr>";
for($i = 0; $i < $result -> columnCount(); $i++ )
{
   $colonne = $result -> getColumnMeta($i);
   $tab['resultat'] .= '<th>' . $colonne['name'] . '</th>';
}

$tab['resultat'] .= '</tr>';

while ($ligne = $result->fetch(PDO::FETCH_ASSOC)) 
	{
   $tab['resultat'] .= '<tr>';
       foreach ($ligne as $indice => $information)
        {
           $tab['resultat'] .= '<td>' . $information . '</td>';
       }
       $tab['resultat'] .= '</table>';

  // print_r($tab);

  echo json encode($tab);
  }
