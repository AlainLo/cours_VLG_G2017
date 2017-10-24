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
    </style>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    
    <body>
        <h1>Exercice 1 : Formulaire POST</h1>
        <?php
        //récupération des saisies postées sur la page
        if(isset($_POST['surname']) && isset($_POST['name']) && isset($_POST['address']) && isset($_POST['city']) && isset($_POST['cp']) && isset($_POST['gender']) && isset($_POST['desc']))
        {//vérification que le formulaire a été validé
            extract($_POST);
            echo 'Nom : ' . $surname . '<br />Prénom : ' . $name;
        }
        
        
        ?>
        
        <form method="post" action="">
            <label for="surname">Nom</label>
            <input type="text" id="" name="surname" value="" placeholder="mon nom"/>
            
            <label for="name">Prénom</label>
            <input type="text" id="" name="name" value="" placeholder="mon prénom"/>
            
            <label for="address">Adresse</label>
            <textarea id="" name="address" value="" placeholder="mon adresse"></textarea>
            
            <label for="city">Ville</label>
            <input type="text" id="" name="city" value="" placeholder="ma ville" />
            
            <label for="cp">Code postal</label>
            <input type="text" id="" name="cp" value="" placeholder="75015" />
            
            <label for="gender">Civilité</label>
            <select name="gender" required="true">
                <option>Homme</option>
                <option>Femme</option>
            </select>
            
            <label for="desc"></label>
            <textarea id="" name="desc" value="" placeholder="Description"></textarea> 
            
            <input type="submit" value="Valider"/>
               
        </form>
        
        
        
        
    </body>
    
</html>
