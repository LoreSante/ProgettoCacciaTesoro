<?php
session_start();
?>
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Caccia al Tesoro</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.8">
    <link href="css/defeatPage_style.css" rel="stylesheet" type="text/css">
    <link href="css/victoryPage_style.css" rel="stylesheet" type="text/css">
    <link href="css/page_style.css" rel="stylesheet" type="text/css">
    <link href="css/dialog_style.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="scripts/jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

    <script type="text/javascript" src="scripts/finishGameButton_plugin.js"></script>
    <script type="text/javascript" src="scripts/finishGameButton_plugin_init.js"></script>
    <!--
    <script type="text/javascript" src="scripts/ipAddress_plugin.js"></script>
    <script type="text/javascript" src="scripts/ipAddress_plugin_init.js"></script>
    -->
    <!-- START bootstrap -->
    <script src="scripts/bootstrap.min.js" type="text/javascript"></script>
    <link href="css/bootstrap.min.css" type="text/css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <!-- END bootstrap -->

</head>
<body>
<div class="topContainer"></div>
<div class="header6"></div>
<div class="header7"></div>
<div class="outcomeTextWrapper">
    <div class="textRedContainer">
        <p id="firstText">
            HAI PERSO
        </p>
        <br>
        <p id="secondText">
            Un altro giocatore ha risolto tutti gli indovinelli prima di te...
        </p>
        <!--LISTA QUADRI-->
        <div class="endGamePaintingsContainer" id="endGamePaintingsContainer">

        </div>
        <!----->
        <button class="finishGameButton" id="finishGameButton" type="button">Ritorna al menù principale</button>
    </div>
</div>
<div class="header7"></div>
<div class="header6"></div>
<div class="bottomContainer"></div>
</body>
</html>
