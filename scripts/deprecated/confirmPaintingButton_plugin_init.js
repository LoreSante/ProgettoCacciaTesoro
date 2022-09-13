$(document).ready(function() {
    console.log("INIT THE GAME PLUGIN");
    jQuery(".cluePageWrapper").confirmButton({serverURL : "server/player_actions_page.php",
        serverURL2 : "server/sessionGetter_methods_page.php"});
});