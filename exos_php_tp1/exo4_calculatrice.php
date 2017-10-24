<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8" />
        
    </head>
    
    <style>
        * { font-family: 'Open Sans', sans-serif; }
        body {width: 80%; text-align: center; margin: 0 auto;}
        h1 { background-color: indigo; color: white; padding: 10px; font-size: 14px; text-align: center; margin-top: 0px; }
        .flex-loop { 
            display: flex;
            background: thistle;
            min-height: 30em;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
        }
        
        .loop {
            display: flex;
            background: midnightblue;
            color: white;
            flex-wrap: wrap;
            
        }
        
        .loop2 {
            display: flex;
            background: midnightblue;
            color: white;
            flex-wrap: wrap;
            
        }
        
        .donut {
            display: flex;
            height: 120px;
            line-height: 420px;
            width: 120px;
            border-radius: 50%;
            border: 5px solid indigo;
            text-align: center;
            font-size: 40px;
            color: white;
            animation: rotate 1s alternate infinite;
        }

        @keyframes rotate {
            from {
                background: thistle;
                transform: rotate(0deg);
            }
            to {
                background: indigo;
                transform: rotate(360deg);
            }
        }

        /*color: indigo; midnightblue; slateblue; lightcyan; thistle; */
       
    </style>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    
    <body>
        <h1>Exercice 4 : Calculatrice</h1>
        <!--<h3>Exercice 3.5 : Afficher : "Je m'affiche pour la Nème fois"</h3>-->
        
        <div class="flex-loop">
            <div class="donut">*</div>
            
            <div class="loop">
            
                <form method="post" action="">
                    <input type="number" name="nb1" placeholder="Chiffre 1" />
                    <select name="operator">
                        <option>+</option>
                        <option>-</option>
                        <option>*</option>
                        <option>/</option>
                        <option>%</option>
                    </select>
                    
                    <input type="number" name="nb2" placeholder="Chiffre 2" />
                    
                    <input type="submit" value="Calculer" />
                </form>
            </div>
            <div>
                <?php
                    if(isset($_POST['nb1']) && isset($_POST['operator']) && isset($_POST['nb2']))
                    {
                        extract($_POST);
                        switch ($operator) {
                            case "+" : 
                            $result = $nb1 + $nb2;
                            break;
                        
                            case "-" : 
                            $result = $nb1 - $nb2;
                            break;
                        
                            case "*" : 
                            $result = $nb1 * $nb2;
                            break;
                        
                            case "/" : 
                            $result = $nb1 / $nb2;
                            break;
                        
                            case "%" : 
                            $result = $nb1 % $nb2;
                            break;

                            default: echo '<h1>Veuillez recommencer votre saisie !</h1>';
                            break;
                        }
                        echo '<h1>Résultat : ' . $result . '</h1>';
                    }
                
                ?> 
                
                
            </div>
        </div>
               
        
    </body>
    
</html>
