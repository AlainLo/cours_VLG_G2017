
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="icon" href="../../favicon.ico">

  <title>Formulaire</title>

  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">

  <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
  <!-- <link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet"> -->

  <!-- Custom styles for this template -->
  <link href="css/style.css" rel="stylesheet">

  <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
  <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
  <!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
    </head>

    <body>

      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Répertoire</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </nav>

      <div class="container">

        <div class="starter-template">
          <h1>Formulaire</h1>

          <form class="form-horizontal col-sm-8 col-sm-offset-2">
            <div class="form-group">
              <label for="nom" class="col-sm-2 control-label">Nom</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="nom" name="nom" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label for="prenom" class="col-sm-2 control-label">Prénom</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="prenom" name="prenom" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label for="tel" class="col-sm-2 control-label">Téléphone</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="tel" name="tel" maxlength="10" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label for="profession" class="col-sm-2 control-label">Profession</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="profession" name="profession" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label for="ville" class="col-sm-2 control-label">Ville</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="ville" name="ville" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label for="cp" class="col-sm-2 control-label">Code postal</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="cp" name="cp" maxlength="5" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label for="adresse" class="col-sm-2 control-label">Adresse</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="adresse" name="adresse" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label for="date_naiss" class="col-sm-2 control-label">Anniversaire</label>
              <?php 
              //création des listes pour la date de naissance
              echo '<select id="jour_naiss" name="jour_naiss" value="">';
              echo '<option value="" selected disabled>Jour</option>';
                $jour = date("d");
                for ($jour = 1; $jour <= 31 ; $jour++)
                  {
                    echo '<option name="jour" value="' . $jour . '">' . $jour . '</option>';
                  }
              echo '</select>&nbsp';
              //mois
              echo '<select id="mois_naiss" name="mois_naiss">'; 
              echo '<option value="" selected disabled>Mois</option>';  
                $mois = date("m");
                for ($mois = 1; $mois <= 12 ; $mois++)
                  {
                    echo '<option name="mois_naiss" value="' . $mois . '">' . $mois . '</option>';
                  } 
              echo '<select>&nbsp';
              //année
              echo '<select id="an_naiss" name="an_naiss">'; 
              echo '<option value="" selected disabled>Année</option>'; 
                $annee_en_cours = date("Y");
                for ($annee = $annee_en_cours; $annee >= ($annee_en_cours - 100) ; $annee--)
                  {
                    echo '<option name="an_naiss" value="' . $annee . '">' . $annee . '</option>';
                  } 
              echo '</select><br />';
              ?>  
              </div>  
              <div class="form-group">
                <label for="sexe" class="col-sm-2 control-label">Sexe</label>';
                  <div class="col-sm-4">
                      <input type="radio" id="sexe" name="sexe" value="m" class="col-sm-1" checked />Homme
                      <input type="radio" id="sexe" name="sexe" value="f" />&nbspFemme
                  </div><br />
              </div>

              <div class="form-group">
                <label for="description" class="col-sm-2 control-label">Description</label>
                <div class="col-sm-8">
                  <textarea id="description" name="description" class="input form-control"></textarea><br /></div>
              </div>

            <div class="form-group">
              <div>
                <button type="submit" class="btn btn-primary form-control">Envoyer</button>
              </div>
            </div>
          </form>

        </div>

      </div><!-- /.container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script> -->
    <script src="js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <!-- <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script> -->
  </body>
  </html>
