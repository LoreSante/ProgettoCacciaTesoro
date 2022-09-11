<?php
// Start the session
session_start();


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>EnterGame</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="scripts/jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link href="css/page_style.css" rel="stylesheet" type="text/css">
    <link href="css/enterGameStyle.css" rel="stylesheet" type="text/css">

    <script type="text/javascript" src="scripts/enterGame_plugin.js"></script>
    <script type="text/javascript" src="scripts/enterGame_plugin_init.js"></script>

    <script type="text/javascript" src="scripts/insertIdGame_plugin.js"></script>
    <script type="text/javascript" src="scripts/insertIdGame_plugin_init.js"></script>


    <script type="text/javascript" src="scripts/returnHomeButton_plugin.js"></script>
    <script type="text/javascript" src="scripts/returnHomeButton_plugin_init.js"></script>



</head>
<body>
    <div class="headerContainer">
        <div class="header">
            <div class="leftIconWrapper">
                <div><a><span class="material-symbols-outlined" id="returnHomeButton" style="cursor:pointer">home</span></a></div>
            </div>
        </div>
    </div>
    <div class="pageWrapper">
        <div class="lightBlueContainer">
            <div class="playerName" id="enterGamePlayerName">Player1</div>
            <div class="playerId" id="playerId" style="display: none;"></div>
            <div><h2 class="enterGameLabel"> Inserisci il codice partita </h2></div>
            <label for="inputFormIdGame"></label>
            <input type="text" placeholder="Inserire codice partita" id="inputFormIdGame" class="inputForm">
            <div class="enterButton"><button  type="button" id="joinGameButton">Entra</button></div>
        </div>
    </div>

    <div class="footerContainer"></div>




</body>
<footer>

</footer>
</html>