<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8" />
        
    </head>
    
    <style>
        * { font-family: 'Open Sans', sans-serif; }
        body {width: 60%; text-align: center; margin: 0 auto;}
        h1 { background-color: indigo; color: white; padding: 10px; font-size: 14px; text-align: center; margin-top: 0px; }
        label { display: inline-block; font-weight: bold; font-style: italic; color: midnightblue; width: 140px; font-size: 11px; }
        .sexe { display: inline-block; font-weight: bold; font-style: italic; color: midnightblue; width: 140px; font-size: 11px; }
        .input { width: 100%; background-color: lightcyan; border: 1px solid thistle; }
        textarea { width: 100%; background-color: lightcyan; border: 1px solid thistle; min-height: 60px; }
        form { padding: 0px 10px; }
        .container { width: 500px; margin: 0 auto; border: 1px solid indigo; }
        .bouton { width: 104%; background-color: slateblue; color: white; padding: 10px; font-size: 14px; margin-left: -10px;}
        .bouton:hover { background-color: indigo; color: white; cursor: pointer; font-weight: bold; }
        .obs { font-style: italic; font-size: 8px; }
        .datenaiss .jour .mois { display: inline-block; }
        ul li {text-align: left;}
    </style>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    
    <body>
        <h1>Exercice 2 : Liens GET</h1>
        
        <ul>
            <li><a href="exo2_liens.php?id=français">France</a></li>
            <li><a href="exo2_liens.php?id=italien">Italie</a></li>
            <li><a href="exo2_liens.php?id=anglais">Angleterre</a></li>
            <li><a href="exo2_liens.php?id=belge">Belgique</a></li>
        </ul><hr />
               
        <?php
        
        if(!empty($_GET))
        {
            echo 'Etes-vous ' . $_GET['id'] . '?';
        }
        
        ?>
        
        
    </body>
    
</html>
