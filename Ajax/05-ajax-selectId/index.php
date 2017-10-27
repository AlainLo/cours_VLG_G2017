<!DOCTYPE html>
<html>
<head>
	<script src="ajax5.js"></script>
</head>
<body>
	<form method="post" action="#">
<?php
	require_once('init.inc.php');
	$result = $mysqli->query("SELECT * FROM employes");
	echo '<select name="personne" id="personne">';
	while($employe = $result->fetch_assoc())
	{
		echo "<option>$employe[prenom]</option>";
	}
	echo '</select>';
?>
		<input type="submit" value="ok" id="submit">
	</form>
<div id="resultat"></div>

</body>
</html>