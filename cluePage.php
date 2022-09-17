<?php
// Start the session
session_start();


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CluePage</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script type="text/javascript" src="scripts/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="scripts/playername_plugin_init.js"></script>
    <script type="text/javascript" src="scripts/playername_plugin.js"></script>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link href="css/gameStyle.css" rel="stylesheet" type="text/css">
    <link href="css/page_style.css" rel="stylesheet" type="text/css">
    <link href="css/rulesStyle.css" rel="stylesheet" type="text/css">

    <script type="text/javascript" src="scripts/playerList_plugin.js"></script>
    <script type="text/javascript" src="scripts/playerList_plugin_init.js"></script>

    <script type="text/javascript" src="scripts/cluePageGame_plugin.js"></script>
    <script type="text/javascript" src="scripts/cluePageGame_plugin_init.js"></script>
<!--
    <script type="text/javascript" src="scripts/confirmPaintingButton_plugin.js"></script>
    <script type="text/javascript" src="scripts/confirmPaintingButton_plugin_init.js"></script>
-->
    <script type="text/javascript" src="scripts/endGame_plugin.js"></script>
    <script type="text/javascript" src="scripts/endGame_plugin_init.js"></script>


    <script type="text/javascript" src="scripts/headerPoints_plugin.js"></script>
    <script type="text/javascript" src="scripts/headerPoints_plugin_init.js"></script>

    <script type="text/javascript" src="scripts/goToEndPage_plugin.js"></script>
    <script type="text/javascript" src="scripts/goToEndPage_plugin_init.js"></script>

    <script type="text/javascript" src="scripts/returnHomeButton_plugin.js"></script>
    <script type="text/javascript" src="scripts/returnHomeButton_plugin_init.js"></script>

    <!--<script type="text/javascript" src="scripts/testing_init.js"></script>
    <script type="text/javascript" src="scripts/testing.js"></script>-->

    <script type="text/javascript" src="scripts/rulesDialog.js"></script>
    <script type="text/javascript" src="scripts/rulesDialog_init.js"></script>



    <!-- inizio Bootstrap link -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet">
    <!-- fine Bootstrap link -->

</head>
<body id="cluePageBody">
    <div class="headerContainer">
        <div  class="headerCluePage">
            <div class="iconClueWrapper">
                <div><a><span class="material-symbols-outlined headerButton" id="returnHomeButton">home</span></a></div>
                <div><a href="gallery.php"><span class="material-symbols-outlined headerButton">panorama</span></a></div>
            </div>
            <div id="headerProgress">
                <p class="points">0/10</p>
            </div>
            <div class="rightClueIconWrapper">
                <h5 id="rulesButton">Come si gioca?</h5>
            </div>
        </div>
    </div>
    <div class="cluePageWrapper">
        <div class="adv advClue" ><img src="https://via.placeholder.com/50x450?text=adv"></div>
        <div class="clueContainer">
            <div class="clueText" id="clueText">Loading</div>
                <div  class="paintPicture"><img id="paintImage" src="http://www.dapasserella.com/wp-content/uploads/2018/07/Moschino-punto-interrogativo.jpg"></div>
                <button id="confirmButton" class="homeButton confirmButton" type="button">Conferma</button>
                <select title="Seleziona quadro" id="selectPaint" class="selectPaint"></select>
            </div>
        <div id="playerNamesContainer" class="playerNamesContainer">
        </div>
    </div>


    <!-- FINESTRA DI DIALOGO -->
    <div class="container-fluid" id="formWrapper">
        <div id="rulesWindow">
            <span class="material-symbols-outlined headerButton" id="closeButton">close</span>
            WEEEEEEEEE
        </div>

    </div>



</body>
<footer>
    <div class="footerCluePage">
        <div id="footerProgress" >
            <p class="points">0/10</p>
        </div>
    </div>
</footer>
</html>