$(document).ready(function() {
    console.log("INIT PLUGIN AUTENTICATION");
    jQuery(".finishGameButton").finishGameButton({serverURL : "server/player_actions_page.php", serverURL2 : "server/sessionGetter_methods_page.php", serverURL3 : "server/matches_actions_page.php"});
});