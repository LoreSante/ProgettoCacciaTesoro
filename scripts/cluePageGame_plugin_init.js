$(document).ready(function() {
    console.log("INIT THE GAME PLUGIN");
    jQuery(".cluePageWrapper").cluePageGame({serverURL : "server/paintings_actions_page.php",
        serverURL2 : "server/sessionGetter_methods_page.php",serverURL3 : "server/player_actions_page.php"});
});