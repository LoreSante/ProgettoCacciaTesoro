$(document).ready(function() {
    console.log("INIT PLUGIN");
    jQuery(".newGameButton").createGame({serverURL : "server/matches_action_page.php", serverURL2 :"server/player_actions_page.php"});
});
