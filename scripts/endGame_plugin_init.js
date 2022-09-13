$(document).ready(function() {
    console.log("END GAME PLUGIN INIT");
    jQuery(".cluePageWrapper").endGame({serverURL : "server/sessionGetter_methods_page.php",
        serverURL2 : "server/player_actions_page.php", serverURL3:"server/matches_actions_page.php" });
});