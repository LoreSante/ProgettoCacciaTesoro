<?php
// Start the session
session_start();
$_SESSION["paintingsArray"]=[];
?>


<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NewGame</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.8">
    <script type="text/javascript" src="scripts/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="scripts/newGame_plugin.js"></script>
    <script type="text/javascript" src="scripts/gameLobby_plugin.js"></script>
    <script type="text/javascript" src="scripts/gameLobby_plugin_init.js"></script>
    <script type="text/javascript" src="scripts/newGame_plugin_init.js"></script>

    <script type="text/javascript" src="scripts/returnHomeButton_plugin.js"></script>
    <script type="text/javascript" src="scripts/returnHomeButton_plugin_init.js"></script>

    <script type="text/javascript" src="scripts/startGameButton_plugin.js"></script>
    <script type="text/javascript" src="scripts/startGameButton_plugin_init.js"></script>

    <script type="text/javascript" src="scripts/statusGame_plugin.js"></script>
    <script type="text/javascript" src="scripts/statusGame_plugin_init.js"></script>

    <script type="text/javascript" src="scripts/checkStatusGame.js"></script>
    <script type="text/javascript" src="scripts/checkStatusGame_init.js"></script>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link href="css/page_style.css" rel="stylesheet" type="text/css">
    <link href="css/gameStyle.css" rel="stylesheet" type="text/css">

</head>
<body>
    <div class="headerContainer">
       <div class="header">
          <div class="leftIconWrapper">
              <div><a><span class="material-symbols-outlined headerButton" id="returnHomeButton" style="cursor:pointer">home</span></a></div>
          </div>
       </div>
    </div>
    <div class="newGamePageWrapper">
        <div class="adv"><img src="https://via.placeholder.com/50x450?text=adv"></div>
        <div class="lobbyContainer">
            <div class="codeLabelWrapper matchIdWrapper" id="matchIdWrapper">
                <p class="codeLabel">Codice Partita:</p>
                <p class="matchID" id="matchID">Loading...</p>
            </div>
            <div class="playerNamesWrapper" id="playerNamesWrapper">
            </div>
            <div class="playerId" id="playerId">
            </div>
            <button class="startGameButton" id="startGameButton" type="button" ">Avvia Partita</button>
        </div>
        <div class="adv"><img src="https://via.placeholder.com/50x450?text=adv"></div>
    </div>
</body>
<footer>
    <div class="footerContainer"></div>
</footer>
</html>

