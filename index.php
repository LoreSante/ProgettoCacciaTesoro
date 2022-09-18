<?php
session_start();

$_SESSION["idUser"] = "";

?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Caccia al Tesoro</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.8">

    <script type="text/javascript" src="scripts/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="scripts/newGame_plugin.js"></script>
    <script type="text/javascript" src="scripts/newGame_plugin_init.js"></script>
    <script type="text/javascript" src="scripts/enterGameButton_plugin.js"></script>
    <script type="text/javascript" src="scripts/enterGameButton_init_plugin.js"></script>
    <script type="text/javascript" src="scripts/playername_plugin_init.js"></script>
    <script type="text/javascript" src="scripts/playername_plugin.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

    <script type="text/javascript" src="scripts/adminLogin_init.js"></script>
    <script type="text/javascript" src="scripts/adminLogin.js"></script>

    <link href="css/page_style.css" rel="stylesheet" type="text/css">
    <link href="css/indexPageStyle.css" rel="stylesheet" type="text/css">

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


<body class="bodyIndex">
<div class="headerContainer">
    <div class="header">
        <div class="rightIconWrapper">
            <div>
                <a class="loginButton" href="#">
                    <span class="headerButton material-symbols-outlined">engineering</span>
                </a>
            </div>
        </div>
    </div>
    <div class="header2"></div>
    <div class="header3"></div>
</div>
<div class="indexContainer">
    <div class="logo">
        <div> Gallery </div>
        <h1 class="subtitle">
            Un gioco di caccia al tesoro attraverso i dipinti dell'arte di tutto il mondo. Risolvi gli indovinelli e raggiungi la vittoria!
        </h1>
    </div>
    <div class="plugin_wrapper">
        <form class="row-cols-1 text-center pluginName" action=server/player_actions_page.php method="post">
            <label class="col fnameWrapper" title="Nome giocatore" >
                <input type="text" class="fname" id="fname" placeholder="Inserire nome giocatore">
                </label>
            <input type="button" value="Accedi" class="nameSelected col" style="width: 50%;">
        </form>
    </div>
</div>
</body>

<footer>
    <div class="footerContainer">
        <div class="header3"></div>
        <div class="header2"></div>
    </div>
</footer>

</html>


