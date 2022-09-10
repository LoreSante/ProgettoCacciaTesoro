$(document).ready(function() {
    console.log("INIT PLUGIN AUTENTICATION");
    jQuery(".lobbyContainer").matchIdLoad({serverURL : "server/matches_actions_page.php", serverURL2 : "server/player_actions_page.php"});
});