$(document).ready(function() {
    console.log("INIT PLAYER LIST PLUGIN");
    jQuery(".playerNamesContainer").showPlayerList({serverURL2 : "server/player_actions_page.php", serverURL : "server/sessionGetter_methods_page.php"});
});