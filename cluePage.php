<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CluePage</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/page_style.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="scripts/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="scripts/playername_plugin_init.js"></script>
    <script type="text/javascript" src="scripts/playername_plugin.js"></script>
    <link href="css/gameStyle.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

    <script type="text/javascript" src="scripts/playerList_plugin.js"></script>
    <script type="text/javascript" src="scripts/playerList_plugin_init.js"></script>

    <script type="text/javascript" src="scripts/cluePageGame_plugin.js"></script>
    <script type="text/javascript" src="scripts/cluePageGame_plugin_init.js"></script>


    <!-- inizio Bootstrap link -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet">
    <!-- fine Bootstrap link -->

</head>
<body>
    <div class="headerContainer">
        <div  class="header">
            <div class="leftIconWrapper">
                <div><a href="index.php"><span class="material-symbols-outlined">home</span></a></div>
                <div><a href="gallery.php"><span class="material-symbols-outlined">panorama</span></a></div>
                <div><a href="index.php"><span class="material-symbols-outlined">cancel</span></a></div>
            </div>
        </div>
    </div>
    <div class="cluePageWrapper">
        <div class="adv"><img src="https://via.placeholder.com/50x450"></div>
        <div class="clueContainer">
            <div class="clueText">Indovino indovinello che script si deve mettere qui bello bello?</div>
            <div class="paintPicture"><img src="https://via.placeholder.com/150x250/#e0e0e0"></div>
            <select title="Seleziona quadro" id="selectPaint" class="selectPaint"></select> <!--TODO script menu a tendina -->
            <button class="homeButton" type="button"">Conferma</button> <!-- TODO modificare CSS e inserire script per conferma del quadro-->

        </div>

        <div id="playerNamesContainer" class="playerNamesContainer">




        </div>



    </div>

</body>
</html>