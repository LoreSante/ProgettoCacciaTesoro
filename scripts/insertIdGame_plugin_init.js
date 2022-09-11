$(document).ready(function() {
    console.log("INIT PLUGIN View Player Name");
    jQuery(".pageWrapper").insertIdGame({serverURL : "server/matches_actions_page.php",serverURL2 : "server/player_actions_page.php", serverURL3 : "server/sessionGetter_methods_page.php" });
});

