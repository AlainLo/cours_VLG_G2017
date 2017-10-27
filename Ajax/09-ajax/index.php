<!DOCTYPE html>
<html>
<head>
	<script src="ajax9.js"></script>
</head>
<body>
	<form method="post" action="">
		<select name="personne" id="personne">
			<?php
			require once("init.inc.php") ;
			$resultat = $pdo->query("SELECT * FROM employes");
			$employes = $resultat->fetchAll(PDO::FETCH_ASSOC);
			?>
			<?php
			foreach($employes as $value){
				echo '<option>' .$value['prenom'] . '</option>';
			}
			?>
		</select>
		<input type="submit" id="submit" value="OK">
	</form>
	<div id="resultat"></div>
</body>
</html>